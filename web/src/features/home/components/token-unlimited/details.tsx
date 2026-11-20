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
              'Higher cache hits make long conversations cheaper, zero data retention means every request serves only you, and multi-region routing on AWS keeps every call available.'
            )}
          </p>
        </div>
      </header>
      <section
        className='tu-features'
        aria-label={t('Caching, data security, and multi-region availability')}
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
              'Your prompts and outputs are used only to complete the current request, and this site does not store request or response bodies. When forwarding to AWS Bedrock, Amazon Bedrock does not store prompts or outputs, and nothing is used for training or secondary analysis.'
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
                NO STORAGE
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
            {t('#03 Region / Multi-region availability')}
          </span>
          <h3>{t('Multi-region, always available')}</h3>
          <p>
            {t(
              'Requests are spread across multiple AWS regions. When one region is throttled or has an outage, traffic automatically fails over to another, so high concurrency stays stable and your work never stops.'
            )}
          </p>
          <figure
            className='tu-plate tu-plate-region tu-klein'
            aria-label={t(
              'Requests from the gateway fan out to several AWS regions; when one region is throttled, traffic fails over to another'
            )}
          >
            {/* 网关向多个 AWS 区域分发，us-east-1 被限流后切换到 us-west-2 */}
            <svg
              className='tu-region-art tu-drift'
              viewBox='0 0 640 360'
              fill='none'
              aria-hidden='true'
            >
              <g className='tu-geo'>
                <ellipse cx='320' cy='170' rx='292' ry='142' />
                <ellipse cx='320' cy='170' rx='150' ry='142' />
                <path d='M28 170H612M60 100H580M60 240H580' />
              </g>
              <text className='tu-route-label' x='40' y='46'>
                MULTI-REGION
              </text>
              <path
                className='tu-lane tu-lane-weak'
                d='M320 272Q270 190 230 100'
              />
              <path className='tu-lane' d='M320 272Q170 250 110 150' />
              <path className='tu-lane' d='M320 272Q360 180 380 90' />
              <path className='tu-lane' d='M320 272Q470 250 540 130' />
              <path className='tu-lane' d='M320 272Q420 270 500 220' />
              <path
                className='tu-runner'
                pathLength='100'
                d='M320 272Q170 250 110 150'
              />
              <path
                className='tu-runner'
                pathLength='100'
                d='M320 272Q360 180 380 90'
              />
              <path
                className='tu-runner'
                pathLength='100'
                d='M320 272Q470 250 540 130'
              />
              <path
                className='tu-runner'
                pathLength='100'
                d='M320 272Q420 270 500 220'
              />
              <path className='tu-failover' d='M222 102Q150 96 118 142' />
              <g className='tu-regions'>
                <circle cx='110' cy='150' r='7' />
                <circle cx='380' cy='90' r='7' />
                <circle cx='540' cy='130' r='7' />
                <circle cx='500' cy='220' r='7' />
              </g>
              <g className='tu-region-down'>
                <circle cx='230' cy='100' r='7' />
                <path d='M223 93L237 107M237 93L223 107' />
              </g>
              <text className='tu-region-code' x='246' y='105'>
                429
              </text>
              <text className='tu-route-note' x='98' y='154' textAnchor='end'>
                us-west-2
              </text>
              <text
                className='tu-route-note'
                x='230'
                y='82'
                textAnchor='middle'
              >
                us-east-1
              </text>
              <text
                className='tu-route-note'
                x='380'
                y='72'
                textAnchor='middle'
              >
                eu-central-1
              </text>
              <text
                className='tu-route-note'
                x='540'
                y='112'
                textAnchor='middle'
              >
                ap-northeast-1
              </text>
              <text
                className='tu-route-note'
                x='514'
                y='224'
                textAnchor='start'
              >
                ap-southeast-1
              </text>
              <circle className='tu-end-ring' cx='320' cy='272' r='22' />
              <circle className='tu-end' cx='320' cy='272' r='13' />
              <text
                className='tu-route-note'
                x='320'
                y='314'
                textAnchor='middle'
              >
                GATEWAY
              </text>
            </svg>
            <figcaption className='tu-plate-cap tu-mono'>
              <span>{t('Fig. 4 — Multi-region failover')}</span>
              <span>AWS regions</span>
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
              "We don't use an account pool — we connect directly to the official AWS Bedrock API. Requests never go through subscription accounts, so they are never throttled or downgraded by account risk controls, and every call gets full capability."
            )}
          </p>
          <figure
            className='tu-plate tu-plate-route tu-klein'
            aria-label={t(
              'Comparison: the account-pool route is degraded after passing through pooled accounts and risk control; the direct route reaches the AWS Bedrock API at full power'
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
                  AWS BEDROCK API
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
          <h3>{t('AWS Bedrock upstream')}</h3>
          <p>
            {t(
              'Clear and reliable. All Claude models come from the official AWS cloud upstream, so you always know where your model comes from.'
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
