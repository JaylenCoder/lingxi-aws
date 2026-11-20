package controller

import (
	"errors"
	"net/http"

	"github.com/QuantumNous/new-api/common"
	"github.com/QuantumNous/new-api/model"
	"github.com/gin-gonic/gin"
)

func GetChannelPriorityOrder(c *gin.Context) {
	order, err := model.GetChannelPriorityOrder()
	if err != nil {
		common.ApiError(c, err)
		return
	}
	c.JSON(http.StatusOK, gin.H{"success": true, "data": order})
}

func ReorderChannelPriority(c *gin.Context) {
	var move model.ChannelPriorityMove
	if err := common.DecodeJson(c.Request.Body, &move); err != nil {
		common.ApiErrorT(c, "Invalid channel priority move")
		return
	}
	if c.GetInt("role") < common.RoleRootUser {
		ids := []int{}
		if move.ID > 0 {
			ids = append(ids, move.ID)
		}
		for _, change := range move.Restore {
			ids = append(ids, change.ID)
		}
		if len(ids) > 0 && !ensureChannelOwner(c, ids...) {
			return
		}
		// 预览出的连带调整同样不能改动他人渠道
		preview := move
		preview.Preview = true
		planned, err := model.ReorderChannelPriority(preview)
		if err == nil {
			changed := make([]int, 0, len(planned.Changes))
			for _, change := range planned.Changes {
				changed = append(changed, change.ID)
			}
			if len(changed) > 0 && !ensureChannelOwner(c, changed...) {
				return
			}
		}
	}
	order, err := model.ReorderChannelPriority(move)
	if err != nil {
		if errors.Is(err, model.ErrChannelPriorityConflict) || errors.Is(err, model.ErrChannelPriorityInvalid) || errors.Is(err, model.ErrChannelPriorityRange) {
			common.ApiErrorT(c, err.Error())
		} else {
			common.ApiError(c, err)
		}
		return
	}
	if !move.Preview && len(order.Changes) > 0 {
		model.InitChannelCache()
	}
	c.JSON(http.StatusOK, gin.H{"success": true, "data": order})
}
