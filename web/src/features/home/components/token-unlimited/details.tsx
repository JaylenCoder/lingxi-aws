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

// 简介、四项特性版画与三列价值说明
export function TuDetails() {
  const { t } = useTranslation()
  const brand = useHomeBrand()
  return (
    <div className='tu-wrap'>
      <header className='tu-intro'>
        <div className='tu-intro-art' aria-hidden='true'>
          <span className='tu-echo tu-drift'>Unlimited</span>
          <i className='tu-float tu-f1 tu-drift' />
          <i className='tu-float tu-f2 tu-drift' />
          <i className='tu-float tu-f3 tu-drift' />
          <i className='tu-float tu-f4 tu-drift' />
        </div>
        <div className='tu-reveal'>
          <span className='tu-mono'>Why {brand}</span>
          <h2>{t('Clear costs, peace of mind.')}</h2>
          <p>
            {t(
              'Higher cache hits make long conversations cheaper, zero data retention means every request serves only you, and GPT Image renders ideas in 4K.'
            )}
          </p>
        </div>
      </header>
      <section
        className='tu-features'
        aria-label={t('Caching, data security, and image generation')}
      >
        <article className='tu-feature tu-reveal'>
          <span className='tu-mono tu-num'>{t('#01 Cache / Cache hits')}</span>
          <h3>{t('Ultra-high cache hit rate')}</h3>
          <p>
            {t(
              'Over the last 7 days, the site-wide input token cache hit rate was 95.4%. Multi-turn chats, agents, and long contexts reuse the same prefix, and cached tokens are billed at the cache price — the longer you chat, the more you save.'
            )}
          </p>
          <figure
            className='tu-plate tu-plate-cache tu-klein'
            aria-label={t('Of every 100 input tokens, 95.4 hit the cache')}
          >
            <span className='tu-big tu-drift' aria-hidden='true'>
              95<small>.4%</small>
            </span>
            <div className='tu-waffle tu-drift' aria-hidden='true'>
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i className='tu-miss' />
              <i className='tu-miss' />
              <i className='tu-miss' />
              <i className='tu-miss' />
              <i className='tu-miss' />
            </div>
            <figcaption className='tu-plate-cap tu-mono'>
              <span>{t('Fig. 2 — Each dot is 1% of input tokens')}</span>
              <span className='tu-legend'>
                <span>
                  <i />
                  {t('Cache hit')}
                </span>
                <span>
                  <i />
                  {t('New input')}
                </span>
              </span>
            </figcaption>
          </figure>
        </article>
        <article className='tu-feature tu-reveal'>
          <span className='tu-mono tu-num'>
            {t('#02 Privacy / Data security')}
          </span>
          <h3>{t('Zero data retention (ZDR)')}</h3>
          <p>
            {t(
              'Your prompts and outputs are used only to complete the current request, and this site does not store request or response bodies. Response storage is forcibly disabled when forwarding to Microsoft Azure, and nothing is used for training or secondary analysis.'
            )}
          </p>
          <figure
            className='tu-plate tu-plate-zdr tu-klein'
            aria-label={t(
              'Request bodies only pass through the gateway and are never stored'
            )}
          >
            <svg
              className='tu-drift'
              viewBox='0 0 400 260'
              fill='none'
              aria-hidden='true'
            >
              <defs>
                <clipPath id='tu-gate-clip'>
                  <rect x='8' y='0' width='200' height='260' />
                </clipPath>
              </defs>
              <g className='tu-feed' clipPath='url(#tu-gate-clip)'>
                <rect x='40' y='62' width='120' height='7' rx='3.5' />
                <rect x='40' y='88' width='84' height='7' rx='3.5' />
                <rect x='40' y='114' width='140' height='7' rx='3.5' />
                <rect x='40' y='140' width='66' height='7' rx='3.5' />
                <rect x='40' y='166' width='110' height='7' rx='3.5' />
                <rect x='40' y='192' width='92' height='7' rx='3.5' />
              </g>
              <path
                className='tu-zdr-gate'
                d='M208 40V222M216 40V222M204 40H220M204 222H220'
              />
              <text className='tu-zdr-label' x='212' y='26' textAnchor='middle'>
                STORE=FALSE
              </text>
              <g className='tu-dust'>
                <circle cx='222' cy='78' r='2' />
                <circle cx='222' cy='104' r='1.6' />
                <circle cx='222' cy='130' r='2.2' />
                <circle cx='222' cy='156' r='1.4' />
                <circle cx='222' cy='182' r='1.8' />
                <circle cx='222' cy='118' r='1.2' />
                <circle cx='222' cy='166' r='1.6' />
              </g>
              <rect
                className='tu-zdr-box'
                x='290'
                y='72'
                width='96'
                height='118'
              />
              <text className='tu-zdr-label' x='338' y='60' textAnchor='middle'>
                RETAINED
              </text>
              <text className='tu-zdr-zero' x='338' y='152' textAnchor='middle'>
                0
              </text>
              <text className='tu-zdr-text' x='338' y='176' textAnchor='middle'>
                BYTES
              </text>
            </svg>
            <figcaption className='tu-plate-cap tu-mono'>
              <span>{t('Fig. 3 — Passes through, never stays')}</span>
              <span>Zero data retention</span>
            </figcaption>
          </figure>
        </article>
        <article className='tu-feature tu-reveal'>
          <span className='tu-mono tu-num'>
            {t('#03 Image / Image generation')}
          </span>
          <h3>{t('GPT Image, up to 4K output')}</h3>
          <p>
            {t(
              'High-quality GPT Image models with output up to 4K resolution. Posters, illustrations, product shots, and design drafts hold up to close inspection in both composition and detail.'
            )}
          </p>
          <figure
            className='tu-plate tu-plate-image tu-klein'
            aria-label={t(
              'An abstract painting sharpens from blurry to clear, illustrating GPT Image 4K output'
            )}
          >
            <svg
              className='tu-image-art tu-drift'
              viewBox='0 0 640 360'
              preserveAspectRatio='xMidYMid slice'
              fill='none'
              aria-hidden='true'
            >
              <defs>
                <clipPath id='tu-sun-clip'>
                  <circle cx='430' cy='140' r='92' />
                </clipPath>
              </defs>
              <ellipse
                className='tu-img-line'
                cx='430'
                cy='140'
                rx='210'
                ry='44'
                transform='rotate(-12 430 140)'
              />
              <circle className='tu-img-sun' cx='430' cy='140' r='92' />
              <g className='tu-img-shade' clipPath='url(#tu-sun-clip)'>
                <circle
                  cx='330'
                  cy='250'
                  r='70'
                  strokeWidth='6.2'
                  strokeDasharray='0 7.997'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='85'
                  strokeWidth='5.6'
                  strokeDasharray='0 7.971'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='100'
                  strokeWidth='5.0'
                  strokeDasharray='0 7.953'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='115'
                  strokeWidth='4.5'
                  strokeDasharray='0 8.029'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='130'
                  strokeWidth='4.0'
                  strokeDasharray='0 8.008'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='145'
                  strokeWidth='3.5'
                  strokeDasharray='0 7.992'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='160'
                  strokeWidth='3.0'
                  strokeDasharray='0 7.979'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='175'
                  strokeWidth='2.6'
                  strokeDasharray='0 8.026'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='190'
                  strokeWidth='2.2'
                  strokeDasharray='0 8.012'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='205'
                  strokeWidth='1.8'
                  strokeDasharray='0 8.000'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='220'
                  strokeWidth='1.4'
                  strokeDasharray='0 7.990'
                />
                <circle
                  cx='330'
                  cy='250'
                  r='235'
                  strokeWidth='1.0'
                  strokeDasharray='0 7.981'
                />
              </g>
              <circle className='tu-img-cin' cx='350' cy='214' r='32' />
              <path
                className='tu-img-arch'
                d='M44 360V232A94 94 0 0 1 232 232V360Z'
              />
              <path className='tu-img-line' d='M0 270H640' />
              <g className='tu-img-sea' transform='translate(10 -56)'>
                <path d='M-20 326.7L0 332L20 337.3L40 339.1L60 337.8L80 336.4L100 336.8L120 337.3L140 335L160 329.7L180 324.8L200 323.7L220 325.9L240 328.4L260 328.9L280 328.9L300 331.3L320 336.3L340 340.5L360 340.8L380 337.5L400 334.2L420 333L440 332.7L460 330.5L480 326.2L500 322.8L520 323.5L540 327.7L560 331.8L580 333.4L600 333.5L620 335.2' />
                <path d='M-20 349.3L0 352.4L20 351.6L40 349.2L60 348.1L80 348.6L100 347.9L120 344L140 339L160 336.5L180 338.2L200 341.6L220 343.4L240 343.4L260 344.2L280 347.8L300 352.2L320 353.8L340 351.3L360 347L380 344.6L400 344.4L420 343.8L440 340.9L460 337.2L480 336.5L500 339.9L520 344.8L540 347.6L560 347.7L580 347.7L600 349.9L620 352.6' />
                <path d='M-20 365.3L0 362.5L20 360.1L40 359.8L60 360.1L80 358L100 353.6L120 350.1L140 350.6L160 354.2L180 357.4L200 358.1L220 357.9L240 359.6L260 363.4L280 366.1L300 364.9L320 360.5L340 356.8L360 356L380 356.4L400 355.2L420 352.1L440 350.3L460 352.3L480 357.1L500 361.1L520 361.9L540 361L560 361.4L580 363.6L600 364.7L620 362.2' />
                <path d='M-20 372.8L0 371.3L20 371.8L40 371.3L60 368.2L80 364.4L100 363.5L120 366.4L140 370.5L160 372.4L180 372L200 372.1L220 374.6L240 377.7L260 378L280 374.4L300 369.9L320 367.8L340 368.4L360 368.8L380 367L400 364.7L420 365.1L440 369.1L460 373.9L480 375.8L500 374.8L520 373.7L540 374.7L560 376.3L580 375.4L600 371.2L620 366.5' />
                <path d='M-20 383.2L0 383.9L20 382.6L40 379.2L60 377.1L80 378.7L100 383L120 386.1L140 386.3L160 385.3L180 386.2L200 388.9L220 390.4L240 388.2L260 383.6L280 380.3L300 380.3L320 381.8L340 381.6L360 379.6L380 378.6L400 381.2L420 385.9L440 389.1L460 388.7L480 386.7L500 386.1L520 387.5L540 388L560 385.3L580 380.6L600 377.8L620 378.7' />
                <path d='M-20 396.3L0 394.1L20 391.4L40 391.5L60 395.1L80 399.1L100 400.4L120 399.1L140 398.3L160 399.9L180 402.1L200 401.5L220 397.7L240 393.6L260 392.5L280 394.2L300 395.5L320 394.5L340 392.8L360 393.7L380 397.6L400 401.6L420 402.4L440 400.2L460 398.2L480 398.7L500 400L520 399L540 395.2L560 391.5L580 391.2L600 393.9L620 396.4' />
              </g>
              <g className='tu-img-stars'>
                <circle cx='96' cy='58' r='2' />
                <circle cx='178' cy='112' r='1.4' />
                <circle cx='246' cy='40' r='1.8' />
                <circle cx='588' cy='56' r='1.4' />
                <circle cx='610' cy='210' r='2' />
              </g>
            </svg>
            <div className='tu-lowres' aria-hidden='true' />
            <span className='tu-scanline' aria-hidden='true'>
              <b className='tu-mono'>4K</b>
            </span>
            <figcaption className='tu-plate-cap tu-mono'>
              <span>Fig. 4 — GPT Image</span>
              <span>Up to 4K</span>
            </figcaption>
          </figure>
        </article>
        <article className='tu-feature tu-reveal'>
          <span className='tu-mono tu-num'>
            {t('#04 Direct / Full-power direct link')}
          </span>
          <h3>{t('Full power, never dumbed down')}</h3>
          <p>
            {t(
              "We don't use an account pool — we connect directly to the official Microsoft Azure API. Requests never go through subscription accounts, so they are never throttled or downgraded by account risk controls, and every call gets full capability."
            )}
          </p>
          <figure
            className='tu-plate tu-plate-route tu-klein'
            aria-label={t(
              'Comparison: the account-pool route is degraded after passing through pooled accounts and risk control; the direct route reaches the Microsoft Azure API at full power'
            )}
          >
            <svg
              className='tu-route-art tu-drift'
              viewBox='0 0 640 360'
              fill='none'
              aria-hidden='true'
            >
              <text className='tu-route-label' x='40' y='54'>
                {t('A — ACCOUNT POOL')}
              </text>
              <g className='tu-pool'>
                <path
                  className='tu-lane'
                  d='M76 110H180C196 110 200 92 214 100C228 108 226 126 240 120C254 114 252 96 268 104C282 111 286 110 300 110H352'
                />
                <g className='tu-accounts'>
                  <circle cx='200' cy='92' r='7' />
                  <circle cx='218' cy='124' r='6' />
                  <circle cx='236' cy='96' r='8' />
                  <circle cx='252' cy='128' r='5' />
                  <circle cx='266' cy='100' r='7' />
                  <circle cx='214' cy='104' r='5' />
                  <circle cx='244' cy='114' r='6' />
                  <circle cx='228' cy='138' r='5' />
                  <circle cx='270' cy='120' r='6' />
                  <circle cx='196' cy='118' r='5' />
                  <circle cx='258' cy='84' r='5' />
                  <circle cx='282' cy='108' r='5' />
                </g>
                <path
                  className='tu-runner'
                  pathLength='100'
                  d='M76 110H180C196 110 200 92 214 100C228 108 226 126 240 120C254 114 252 96 268 104C282 111 286 110 300 110H352'
                />
                <path className='tu-lane tu-lane-weak' d='M368 110H558' />
                <path
                  className='tu-runner tu-runner-weak'
                  pathLength='100'
                  d='M368 110H558'
                />
                <circle className='tu-end-weak' cx='574' cy='110' r='9' />
                <text
                  className='tu-route-note'
                  x='574'
                  y='140'
                  textAnchor='middle'
                >
                  {t('DEGRADED')}
                </text>
                <circle className='tu-node' cx='64' cy='110' r='9' />
                <text
                  className='tu-route-note'
                  x='64'
                  y='140'
                  textAnchor='middle'
                >
                  YOU
                </text>
              </g>
              <rect className='tu-gate' x='356' y='84' width='8' height='52' />
              <text
                className='tu-gate-label'
                x='360'
                y='74'
                textAnchor='middle'
              >
                RISK CONTROL
              </text>
              <text className='tu-route-label' x='40' y='198'>
                B — {brand} / DIRECT
              </text>
              <g className='tu-direct'>
                <path className='tu-lane tu-lane-strong' d='M76 252H504' />
                <path
                  className='tu-runner tu-runner-strong'
                  pathLength='100'
                  d='M76 252H504'
                />
                <text
                  className='tu-route-note'
                  x='290'
                  y='236'
                  textAnchor='middle'
                >
                  {t('FULL POWER')}
                </text>
                <circle className='tu-end-ring' cx='540' cy='252' r='38' />
                <circle className='tu-end' cx='540' cy='252' r='27' />
                <text
                  className='tu-route-note'
                  x='540'
                  y='316'
                  textAnchor='middle'
                >
                  MICROSOFT AZURE API
                </text>
                <circle className='tu-node' cx='64' cy='252' r='9' />
                <text
                  className='tu-route-note'
                  x='64'
                  y='282'
                  textAnchor='middle'
                >
                  YOU
                </text>
              </g>
            </svg>
            <figcaption className='tu-plate-cap tu-mono'>
              <span>Fig. 5 — Pool vs. direct</span>
            </figcaption>
          </figure>
        </article>
      </section>
      <section
        className='tu-values'
        aria-label={t('{{brand}} highlights', { brand })}
      >
        <article className='tu-value tu-reveal'>
          <span className='tu-mono tu-num'>
            {t('#05 Source / Model source')}
          </span>
          <h3>{t('Microsoft Azure upstream')}</h3>
          <p>
            {t(
              'Clear and reliable. All OpenAI models come from the official cloud upstream, so you always know where your model comes from.'
            )}
          </p>
        </article>
        <article className='tu-value tu-reveal'>
          <span className='tu-mono tu-num'>
            {t('#06 Billing / Billing method')}
          </span>
          <h3>{t('Pay as you go, no subscription')}</h3>
          <p>
            {t(
              'Pay only for the tokens you actually use — no monthly subscription and no paying for idle quota.'
            )}
          </p>
        </article>
        <article className='tu-value tu-reveal'>
          <span className='tu-mono tu-num'>{t('#07 Value / Cost of use')}</span>
          <h3>{t('Good models at good prices')}</h3>
          <p>
            {t(
              'Accessible pricing brings high-quality AI into everyday life. Check the Model Square anytime for specific models and billing rates.'
            )}
          </p>
        </article>
      </section>
    </div>
  )
}
