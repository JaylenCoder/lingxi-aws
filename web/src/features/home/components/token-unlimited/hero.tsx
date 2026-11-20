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
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { useAuthStore } from '@/stores/auth-store'

import { useHomeBrand } from '../../hooks'

// 首屏：克莱因蓝主视觉与无限符号版画
export function TuHero() {
  const { t } = useTranslation()
  const brand = useHomeBrand()
  const isAuthenticated = useAuthStore((s) => Boolean(s.auth.user))
  return (
    <section className='tu-hero tu-bleed tu-klein' aria-labelledby='tu-title'>
      <svg
        className='tu-hero-orbits tu-par'
        viewBox='0 0 1400 900'
        preserveAspectRatio='xMidYMid slice'
        aria-hidden='true'
      >
        <circle cx='-120' cy='1060' r='660' />
        <circle cx='-120' cy='1060' r='720' />
        <circle cx='-120' cy='1060' r='860' strokeDasharray='2 9' />
        <circle cx='-120' cy='1060' r='1010' />
        <circle cx='1480' cy='-140' r='300' />
      </svg>
      <div className='tu-wrap'>
        <div className='tu-hero-meta tu-mono'>
          <span>Nº 01 — {brand}</span>
          <span>Claude models · Full capability</span>
        </div>
        <div className='tu-hero-body'>
          <div className='tu-hero-copy tu-par'>
            <h1 id='tu-title'>
              <span className='tu-line'>
                <span>{t('Full-capability models,')}</span>
              </span>
              <span className='tu-line'>
                <span>{t('Accessible prices.')}</span>
              </span>
            </h1>
            <p className='tu-coda'>— {brand}.</p>
            <p className='tu-lead'>
              {t(
                'Claude models served from Amazon Web Services (AWS Bedrock). Full capabilities intact, so every serious question can afford a good model.'
              )}
            </p>
            <div className='tu-actions'>
              {/* 已登录直达控制台，未登录引导注册，避免被路由守卫二次跳转 */}
              <Link
                className='tu-button tu-solid'
                to={isAuthenticated ? '/dashboard' : '/sign-up'}
              >
                {isAuthenticated ? t('Go to Console') : t('Get Started')}
                <i aria-hidden='true'>→</i>
              </Link>
              <Link className='tu-button tu-ghost' to='/pricing'>
                {t('View models and pricing')}
              </Link>
            </div>
          </div>
          <figure
            className='tu-plate-art'
            aria-label={t(
              'Infinity print: full capability, endless possibilities'
            )}
          >
            <svg viewBox='0 0 600 420' fill='none' aria-hidden='true'>
              <defs>
                <filter id='tu-etch' x='-5%' y='-5%' width='110%' height='110%'>
                  <feTurbulence
                    type='fractalNoise'
                    baseFrequency='.75'
                    numOctaves='2'
                    seed='7'
                    result='noise'
                  />
                  <feDisplacementMap
                    in='SourceGraphic'
                    in2='noise'
                    scale='2.6'
                    xChannelSelector='R'
                    yChannelSelector='G'
                  />
                </filter>
              </defs>
              <g className='tu-layer tu-par tu-l-moon'>
                <path
                  className='tu-rays'
                  filter='url(#tu-etch)'
                  d='M600 140L640 140M607.4 154.6L625.3 156.2M597.6 167.8L623.2 172.3M602.3 183.5L633.2 191.8M590.4 194.7L614.8 203.6M592.3 211L608.6 218.6M578.6 220L613.2 240M577.6 236.4L592.4 246.7M562.6 242.8L582.5 259.6M558.8 258.8L581.4 281.4M542.8 262.6L559.6 282.5M536.4 277.6L546.7 292.4M520 278.6L540 313.2M511 292.3L518.6 308.6M494.7 290.4L503.6 314.8M483.5 302.3L491.8 333.2M467.8 297.6L472.3 323.2M454.6 307.4L456.2 325.3M440 300L440 340M425.4 307.4L423.8 325.3M412.2 297.6L407.7 323.2M396.5 302.3L388.2 333.2M385.3 290.4L376.4 314.8M369 292.3L361.4 308.6M360 278.6L340 313.2M343.6 277.6L333.3 292.4M337.2 262.6L320.4 282.5M321.2 258.8L298.6 281.4M317.4 242.8L297.5 259.6M302.4 236.4L287.6 246.7M301.4 220L266.8 240M287.7 211L271.4 218.6M289.6 194.7L265.2 203.6M277.7 183.5L246.8 191.8M282.4 167.8L256.8 172.3M272.6 154.6L254.7 156.2M280 140L240 140M272.6 125.4L254.7 123.8M282.4 112.2L256.8 107.7M277.7 96.5L246.8 88.2M289.6 85.3L265.2 76.4M287.7 69L271.4 61.4M301.4 60L266.8 40M302.4 43.6L287.6 33.3M317.4 37.2L297.5 20.4M321.2 21.2L298.6 -1.4M337.2 17.4L320.4 -2.5M343.6 2.4L333.3 -12.4M360 1.4L340 -33.2M369 -12.3L361.4 -28.6M385.3 -10.4L376.4 -34.8M396.5 -22.3L388.2 -53.2M412.2 -17.6L407.7 -43.2M425.4 -27.4L423.8 -45.3M440 -20L440 -60M454.6 -27.4L456.2 -45.3M467.8 -17.6L472.3 -43.2M483.5 -22.3L491.8 -53.2M494.7 -10.4L503.6 -34.8M511 -12.3L518.6 -28.6M520 1.4L540 -33.2M536.4 2.4L546.7 -12.4M542.8 17.4L559.6 -2.5M558.8 21.2L581.4 -1.4M562.6 37.2L582.5 20.4M577.6 43.6L592.4 33.3M578.6 60L613.2 40M592.3 69L608.6 61.4M590.4 85.3L614.8 76.4M602.3 96.5L633.2 88.2M597.6 112.2L623.2 107.7M607.4 125.4L625.3 123.8'
                />
                <g transform='translate(440 140)'>
                  <g className='tu-rings'>
                    <circle r='18' strokeWidth='5.2' strokeDasharray='0 8.7' />
                    <circle
                      r='31'
                      strokeWidth='4.7'
                      strokeDasharray='0 8.469'
                    />
                    <circle
                      r='44'
                      strokeWidth='4.2'
                      strokeDasharray='0 8.378'
                    />
                    <circle
                      r='57'
                      strokeWidth='3.8'
                      strokeDasharray='0 8.527'
                    />
                    <circle
                      r='70'
                      strokeWidth='3.3'
                      strokeDasharray='0 8.458'
                    />
                    <circle
                      r='83'
                      strokeWidth='2.8'
                      strokeDasharray='0 8.549'
                    />
                    <circle
                      r='96'
                      strokeWidth='2.3'
                      strokeDasharray='0 8.496'
                    />
                    <circle
                      r='109'
                      strokeWidth='1.8'
                      strokeDasharray='0 8.455'
                    />
                    <circle
                      r='122'
                      strokeWidth='1.4'
                      strokeDasharray='0 8.517'
                    />
                    <circle r='135' strokeWidth='1' strokeDasharray='0 8.482' />
                    <circle
                      r='148'
                      strokeWidth='.7'
                      strokeDasharray='0 8.456'
                    />
                  </g>
                </g>
              </g>
              <g className='tu-layer tu-par tu-l-cut'>
                <circle className='tu-cut' cx='150' cy='318' r='112' />
                <circle className='tu-sun' cx='118' cy='66' r='13' />
                <ellipse
                  className='tu-orbit'
                  cx='118'
                  cy='66'
                  rx='46'
                  ry='14'
                  transform='rotate(-18 118 66)'
                />
              </g>
              <g className='tu-layer tu-par tu-l-waves'>
                <g className='tu-waves' filter='url(#tu-etch)'>
                  <path d='M-20 326.7L0 332L20 337.3L40 339.1L60 337.8L80 336.4L100 336.8L120 337.3L140 335L160 329.7L180 324.8L200 323.7L220 325.9L240 328.4L260 328.9L280 328.9L300 331.3L320 336.3L340 340.5L360 340.8L380 337.5L400 334.2L420 333L440 332.7L460 330.5L480 326.2L500 322.8L520 323.5L540 327.7L560 331.8L580 333.4L600 333.5L620 335.2' />
                  <path d='M-20 349.3L0 352.4L20 351.6L40 349.2L60 348.1L80 348.6L100 347.9L120 344L140 339L160 336.5L180 338.2L200 341.6L220 343.4L240 343.4L260 344.2L280 347.8L300 352.2L320 353.8L340 351.3L360 347L380 344.6L400 344.4L420 343.8L440 340.9L460 337.2L480 336.5L500 339.9L520 344.8L540 347.6L560 347.7L580 347.7L600 349.9L620 352.6' />
                  <path d='M-20 365.3L0 362.5L20 360.1L40 359.8L60 360.1L80 358L100 353.6L120 350.1L140 350.6L160 354.2L180 357.4L200 358.1L220 357.9L240 359.6L260 363.4L280 366.1L300 364.9L320 360.5L340 356.8L360 356L380 356.4L400 355.2L420 352.1L440 350.3L460 352.3L480 357.1L500 361.1L520 361.9L540 361L560 361.4L580 363.6L600 364.7L620 362.2' />
                  <path d='M-20 372.8L0 371.3L20 371.8L40 371.3L60 368.2L80 364.4L100 363.5L120 366.4L140 370.5L160 372.4L180 372L200 372.1L220 374.6L240 377.7L260 378L280 374.4L300 369.9L320 367.8L340 368.4L360 368.8L380 367L400 364.7L420 365.1L440 369.1L460 373.9L480 375.8L500 374.8L520 373.7L540 374.7L560 376.3L580 375.4L600 371.2L620 366.5' />
                  <path d='M-20 383.2L0 383.9L20 382.6L40 379.2L60 377.1L80 378.7L100 383L120 386.1L140 386.3L160 385.3L180 386.2L200 388.9L220 390.4L240 388.2L260 383.6L280 380.3L300 380.3L320 381.8L340 381.6L360 379.6L380 378.6L400 381.2L420 385.9L440 389.1L460 388.7L480 386.7L500 386.1L520 387.5L540 388L560 385.3L580 380.6L600 377.8L620 378.7' />
                  <path d='M-20 396.3L0 394.1L20 391.4L40 391.5L60 395.1L80 399.1L100 400.4L120 399.1L140 398.3L160 399.9L180 402.1L200 401.5L220 397.7L240 393.6L260 392.5L280 394.2L300 395.5L320 394.5L340 392.8L360 393.7L380 397.6L400 401.6L420 402.4L440 400.2L460 398.2L480 398.7L500 400L520 399L540 395.2L560 391.5L580 391.2L600 393.9L620 396.4' />
                </g>
              </g>
              <g className='tu-layer tu-par tu-l-core'>
                <g className='tu-etched' filter='url(#tu-etch)'>
                  <path d='M300 210C246.7 142.5 203.8 107.5 146.6 107.5C75.1 107.5 34.8 152.5 34.8 210C34.8 267.5 75.1 312.5 146.6 312.5C203.8 312.5 246.7 277.5 300 210C353.3 142.5 396.2 107.5 453.4 107.5C524.9 107.5 565.2 152.5 565.2 210C565.2 267.5 524.9 312.5 453.4 312.5C396.2 312.5 353.3 277.5 300 210Z' />
                  <path d='M300 210C249.3 149.6 208.4 118.3 154 118.3C85.9 118.3 47.5 158.5 47.5 210C47.5 261.5 85.9 301.7 154 301.7C208.4 301.7 249.3 270.4 300 210C350.7 149.6 391.6 118.3 446 118.3C514.1 118.3 552.5 158.5 552.5 210C552.5 261.5 514.1 301.7 446 301.7C391.6 301.7 350.7 270.4 300 210Z' />
                  <path d='M300 210C251.8 156.7 213.1 129 161.3 129C96.7 129 60.3 164.6 60.3 210C60.3 255.4 96.7 291 161.3 291C213.1 291 251.8 263.3 300 210C348.2 156.7 386.9 129 438.6 129C503.3 129 539.7 164.6 539.7 210C539.7 255.4 503.3 291 438.6 291C386.9 291 348.2 263.3 300 210Z' />
                  <path d='M300 210C254.4 163.8 217.7 139.8 168.7 139.8C107.5 139.8 73 170.6 73 210C73 249.4 107.5 280.2 168.7 280.2C217.7 280.2 254.4 256.2 300 210C345.6 163.8 382.3 139.8 431.3 139.8C492.5 139.8 527 170.6 527 210C527 249.4 492.5 280.2 431.3 280.2C382.3 280.2 345.6 256.2 300 210Z' />
                  <path d='M300 210C256.9 170.8 222.3 150.6 176.1 150.6C118.3 150.6 85.8 176.7 85.8 210C85.8 243.3 118.3 269.4 176.1 269.4C222.3 269.4 256.9 249.2 300 210C343.1 170.8 377.7 150.6 423.9 150.6C481.6 150.6 514.2 176.7 514.2 210C514.2 243.3 481.6 269.4 423.9 269.4C377.7 269.4 343.1 249.2 300 210Z' />
                  <path d='M300 210C259.5 177.9 226.9 161.3 183.5 161.3C129.2 161.3 98.5 182.7 98.5 210C98.5 237.3 129.2 258.7 183.5 258.7C226.9 258.7 259.5 242.1 300 210C340.5 177.9 373.1 161.3 416.5 161.3C470.8 161.3 501.5 182.7 501.5 210C501.5 237.3 470.8 258.7 416.5 258.7C373.1 258.7 340.5 242.1 300 210Z' />
                  <path d='M300 210C262.1 185 231.6 172.1 190.8 172.1C140 172.1 111.3 188.7 111.3 210C111.3 231.3 140 247.9 190.8 247.9C231.6 247.9 262.1 235 300 210C337.9 185 368.4 172.1 409.1 172.1C460 172.1 488.7 188.7 488.7 210C488.7 231.3 460 247.9 409.1 247.9C368.4 247.9 337.9 235 300 210Z' />
                  <path d='M300 210C264.6 192.1 236.2 182.8 198.2 182.8C150.8 182.8 124 194.8 124 210C124 225.2 150.8 237.2 198.2 237.2C236.2 237.2 264.6 227.9 300 210C335.4 192.1 363.8 182.8 401.8 182.8C449.2 182.8 476 194.8 476 210C476 225.2 449.2 237.2 401.8 237.2C363.8 237.2 335.4 227.9 300 210Z' />
                  <path d='M300 210C267.2 199.2 240.8 193.6 205.6 193.6C161.6 193.6 136.8 200.8 136.8 210C136.8 219.2 161.6 226.4 205.6 226.4C240.8 226.4 267.2 220.8 300 210C332.8 199.2 359.2 193.6 394.4 193.6C438.4 193.6 463.2 200.8 463.2 210C463.2 219.2 438.4 226.4 394.4 226.4C359.2 226.4 332.8 220.8 300 210Z' />
                </g>
                <g className='tu-flow'>
                  <path
                    pathLength='100'
                    d='M300 210C244.2 135.5 199.4 96.8 139.5 96.8C64.7 96.8 22.6 146.5 22.6 210C22.6 273.5 64.7 323.2 139.5 323.2C199.4 323.2 244.2 284.5 300 210C355.8 135.5 400.6 96.8 460.5 96.8C535.3 96.8 577.4 146.5 577.4 210C577.4 273.5 535.3 323.2 460.5 323.2C400.6 323.2 355.8 284.5 300 210Z'
                  />
                  <path
                    pathLength='100'
                    d='M300 210C251.6 163.6 212.7 139.5 160.8 139.5C95.9 139.5 59.3 170.4 59.3 210C59.3 249.6 95.9 280.5 160.8 280.5C212.7 280.5 251.6 256.4 300 210C348.4 163.6 387.3 139.5 439.2 139.5C504.1 139.5 540.7 170.4 540.7 210C540.7 249.6 504.1 280.5 439.2 280.5C387.3 280.5 348.4 256.4 300 210Z'
                  />
                  <path
                    pathLength='100'
                    d='M300 210C258.2 181.9 224.5 167.4 179.6 167.4C123.5 167.4 91.9 186.1 91.9 210C91.9 233.9 123.5 252.6 179.6 252.6C224.5 252.6 258.2 238.1 300 210C341.8 181.9 375.5 167.4 420.4 167.4C476.5 167.4 508.1 186.1 508.1 210C508.1 233.9 476.5 252.6 420.4 252.6C375.5 252.6 341.8 238.1 300 210Z'
                  />
                  <path
                    pathLength='100'
                    d='M300 210C263.1 193.8 233.4 185.4 193.8 185.4C144.3 185.4 116.4 196.2 116.4 210C116.4 223.8 144.3 234.6 193.8 234.6C233.4 234.6 263.1 226.2 300 210C336.9 193.8 366.6 185.4 406.2 185.4C455.7 185.4 483.6 196.2 483.6 210C483.6 223.8 455.7 234.6 406.2 234.6C366.6 234.6 336.9 226.2 300 210Z'
                  />
                </g>
                <path
                  className='tu-comet tu-comet-a'
                  pathLength='100'
                  d='M300 210C246.7 142.5 203.8 107.5 146.6 107.5C75.1 107.5 34.8 152.5 34.8 210C34.8 267.5 75.1 312.5 146.6 312.5C203.8 312.5 246.7 277.5 300 210C353.3 142.5 396.2 107.5 453.4 107.5C524.9 107.5 565.2 152.5 565.2 210C565.2 267.5 524.9 312.5 453.4 312.5C396.2 312.5 353.3 277.5 300 210Z'
                />
                <path
                  className='tu-comet tu-comet-b'
                  pathLength='100'
                  d='M300 210C254.4 163.8 217.7 139.8 168.7 139.8C107.5 139.8 73 170.6 73 210C73 249.4 107.5 280.2 168.7 280.2C217.7 280.2 254.4 256.2 300 210C345.6 163.8 382.3 139.8 431.3 139.8C492.5 139.8 527 170.6 527 210C527 249.4 492.5 280.2 431.3 280.2C382.3 280.2 345.6 256.2 300 210Z'
                />
                <circle className='tu-knot-ring' cx='300' cy='210' r='6' />
                <circle className='tu-knot' cx='300' cy='210' r='5' />
              </g>
            </svg>
            <figcaption className='tu-mono'>
              <b>{t('Full capability, endless possibilities.')}</b>Fig. 1 —
              Think beyond
            </figcaption>
          </figure>
        </div>
        <div className='tu-hero-foot tu-mono'>
          <span>Cache hit / 95.4%</span>
          <span>No 5h · No weekly caps</span>
          <span>Tokens / Unlimited</span>
        </div>
      </div>
    </section>
  )
}
