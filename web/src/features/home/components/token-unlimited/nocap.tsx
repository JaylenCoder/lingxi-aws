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
import { useTranslation } from 'react-i18next'

import { useHomeBrand } from '../../hooks'

// 无 5 小时与周限额说明及表盘版画
export function TuNoCap() {
  const { t } = useTranslation()
  const brand = useHomeBrand()
  return (
    <section className='tu-nocap tu-bleed' aria-labelledby='tu-nocap-title'>
      <div className='tu-wrap tu-nocap-grid'>
        <div className='tu-nocap-copy tu-reveal'>
          <span className='tu-mono tu-num'>{t('For subscribers')}</span>
          <h2 id='tu-nocap-title'>
            {t('No 5-hour limits,')}
            <br />
            {t('no weekly caps.')}
          </h2>
          <p>
            {t(
              'Ever been cut off halfway by a 5-hour window or a weekly quota on an official subscription? {{brand}} has no time windows and never resets quota weekly. Late-night crunches and agents running for a whole week can keep going.',
              { brand }
            )}
          </p>
          <div className='tu-pull'>
            <h3>{t('Pay for what you use.')}</h3>
            <p>
              {t(
                "With a subscription, the monthly fee stays the same even if you don't use your quota. Here you're billed on actual usage and never pay for idle quota."
              )}
            </p>
          </div>
        </div>
        <figure
          className='tu-plate tu-plate-dials tu-klein tu-reveal'
          aria-label={t(
            'The limit marks on the 5-hour window and weekly quota dials are crossed out; below, the paid-but-unused part of a fixed monthly fee is compared with actual pay-as-you-go spending'
          )}
        >
          <svg
            className='tu-drift'
            viewBox='0 0 480 400'
            fill='none'
            aria-hidden='true'
          >
            <g className='tu-dial tu-dial-a'>
              <path
                className='tu-tick'
                d='M138.3 61.4L138.8 56.5M146.4 62.7L147.5 57.8M154.4 64.9L156 60.1M162.1 67.8L164.2 63.3M169.5 71.6L172 67.3M176.4 76.1L179.4 72M182.9 81.3L186.2 77.6M188.7 87.1L192.4 83.8M193.9 93.6L198 90.6M198.4 100.5L202.7 98M202.2 107.9L206.7 105.8M207.3 123.6L212.2 122.5M208.6 131.7L213.5 131.2M209 140L214 140M208.6 148.3L213.5 148.8M207.3 156.4L212.2 157.5M205.1 164.4L209.9 166M202.2 172.1L206.7 174.2M198.4 179.5L202.7 182M193.9 186.4L198 189.4M188.7 192.9L192.4 196.2M182.9 198.7L186.2 202.4M169.5 208.4L172 212.7M162.1 212.2L164.2 216.7M154.4 215.1L156 219.9M146.4 217.3L147.5 222.2M138.3 218.6L138.8 223.5M130 219L130 224M121.7 218.6L121.2 223.5M113.6 217.3L112.5 222.2M105.6 215.1L104 219.9M97.9 212.2L95.8 216.7M90.5 208.4L88 212.7M77.1 198.7L73.8 202.4M71.3 192.9L67.6 196.2M66.1 186.4L62 189.4M61.6 179.5L57.3 182M57.8 172.1L53.3 174.2M54.9 164.4L50.1 166M52.7 156.4L47.8 157.5M51.4 148.3L46.5 148.8M51 140L46 140M51.4 131.7L46.5 131.2M52.7 123.6L47.8 122.5M57.8 107.9L53.3 105.8M61.6 100.5L57.3 98M66.1 93.6L62 90.6M71.3 87.1L67.6 83.8M77.1 81.3L73.8 77.6M83.6 76.1L80.6 72M90.5 71.6L88 67.3M97.9 67.8L95.8 63.3M105.6 64.9L104 60.1M113.6 62.7L112.5 57.8M121.7 61.4L121.2 56.5'
              />
              <path
                className='tu-tick-major'
                d='M130 68L130 56M198.5 117.8L209.9 114M172.3 198.2L179.4 208M87.7 198.2L80.6 208M61.5 117.8L50.1 114'
              />
              <circle
                className='tu-dial-arc'
                cx='130'
                cy='140'
                r='62'
                pathLength='100'
              />
              <g className='tu-limit'>
                <text x='130' y='36' textAnchor='middle'>
                  LIMIT
                </text>
                <path d='M108 32H152' />
              </g>
              <text className='tu-dial-num' x='130' y='192' textAnchor='middle'>
                5h
              </text>
              <line className='tu-hand' x1='130' y1='140' x2='130' y2='74' />
              <circle className='tu-hub' cx='130' cy='140' r='4.5' />
              <text
                className='tu-dial-label'
                x='130'
                y='256'
                textAnchor='middle'
              >
                5-HOUR WINDOW
              </text>
              <text
                className='tu-dial-none'
                x='130'
                y='276'
                textAnchor='middle'
              >
                NONE
              </text>
            </g>
            <g className='tu-dial tu-dial-b'>
              <path
                className='tu-tick'
                d='M358.8 61.5L359.4 56.5M367.6 63L368.7 58.1M376.1 65.4L377.7 60.7M384.3 68.8L386.4 64.3M392 73.1L394.7 68.9M399.3 78.2L402.4 74.3M405.9 84.1L409.4 80.6M416.9 98L421.1 95.3M421.2 105.7L425.7 103.6M424.6 113.9L429.3 112.3M427 122.4L431.9 121.3M428.5 131.2L433.5 130.6M429 140L434 140M428.5 148.8L433.5 149.4M424.6 166.1L429.3 167.7M421.2 174.3L425.7 176.4M416.9 182L421.1 184.7M411.8 189.3L415.7 192.4M405.9 195.9L409.4 199.4M399.3 201.8L402.4 205.7M392 206.9L394.7 211.1M376.1 214.6L377.7 219.3M367.6 217L368.7 221.9M358.8 218.5L359.4 223.5M350 219L350 224M341.2 218.5L340.6 223.5M332.4 217L331.3 221.9M323.9 214.6L322.3 219.3M308 206.9L305.3 211.1M300.7 201.8L297.6 205.7M294.1 195.9L290.6 199.4M288.2 189.3L284.3 192.4M283.1 182L278.9 184.7M278.8 174.3L274.3 176.4M275.4 166.1L270.7 167.7M271.5 148.8L266.5 149.4M271 140L266 140M271.5 131.2L266.5 130.6M273 122.4L268.1 121.3M275.4 113.9L270.7 112.3M278.8 105.7L274.3 103.6M283.1 98L278.9 95.3M294.1 84.1L290.6 80.6M300.7 78.2L297.6 74.3M308 73.1L305.3 68.9M315.7 68.8L313.6 64.3M323.9 65.4L322.3 60.7M332.4 63L331.3 58.1M341.2 61.5L340.6 56.5'
              />
              <path
                className='tu-tick-major'
                d='M350 68L350 56M406.3 95.1L415.7 87.6M420.2 156L431.9 158.7M381.2 204.9L386.4 215.7M318.8 204.9L313.6 215.7M279.8 156L268.1 158.7M293.7 95.1L284.3 87.6'
              />
              <circle
                className='tu-dial-arc'
                cx='350'
                cy='140'
                r='62'
                pathLength='100'
              />
              <g className='tu-limit'>
                <text x='350' y='36' textAnchor='middle'>
                  LIMIT
                </text>
                <path d='M328 32H372' />
              </g>
              <text className='tu-dial-num' x='350' y='192' textAnchor='middle'>
                7d
              </text>
              <line className='tu-hand' x1='350' y1='140' x2='350' y2='74' />
              <circle className='tu-hub' cx='350' cy='140' r='4.5' />
              <text
                className='tu-dial-label'
                x='350'
                y='256'
                textAnchor='middle'
              >
                WEEKLY CAP
              </text>
              <text
                className='tu-dial-none'
                x='350'
                y='276'
                textAnchor='middle'
              >
                NONE
              </text>
            </g>
            <defs>
              <pattern
                id='tu-hatch'
                width='6'
                height='6'
                patternUnits='userSpaceOnUse'
                patternTransform='rotate(45)'
              >
                <path d='M0 0V6' className='tu-hatch-line' />
              </pattern>
            </defs>
            <g className='tu-bills'>
              <text className='tu-bill-label' x='40' y='318'>
                {t('Subscription · Fixed fee')}
              </text>
              <text className='tu-bill-waste' x='440' y='318' textAnchor='end'>
                {t('Paid, unused')}
              </text>
              <rect
                className='tu-bill-used'
                x='40'
                y='326'
                width='210'
                height='14'
              />
              <rect
                className='tu-bill-unused'
                x='250'
                y='326'
                width='190'
                height='14'
              />
              <text className='tu-bill-label' x='40' y='368'>
                {t('{{brand}} · Pay as you go', { brand })}
              </text>
              <rect
                className='tu-bill-ours'
                x='40'
                y='376'
                width='172'
                height='14'
              />
              <text className='tu-bill-note' x='222' y='388'>
                {t('Pay for what you use')}
              </text>
            </g>
          </svg>
          <figcaption className='tu-plate-cap tu-mono'>
            <span>Fig. 6 — No caps, no waste</span>
            <span>Pay as you go</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
