/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { DEFAULT_SYSTEM_NAME } from '@/lib/constants'
import { useSystemConfigStore } from '@/stores/system-config-store'

// 未在后台配置系统名称时使用的首页品牌名
export const FALLBACK_HOME_BRAND = 'LINGXI AI'

// 首页品牌名：优先使用后台配置的系统名称，未配置（仍为默认值）时回退
export function useHomeBrand(): string {
  const systemName = useSystemConfigStore((s) => s.config.systemName)
  const name = systemName?.trim()
  if (!name || name === DEFAULT_SYSTEM_NAME) return FALLBACK_HOME_BRAND
  return name
}
