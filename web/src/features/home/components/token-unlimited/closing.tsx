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

// 结尾行动号召
export function TuClosing() {
  const { t } = useTranslation()
  const isAuthenticated = useAuthStore((s) => Boolean(s.auth.user))
  return (
    <section
      className='tu-closing tu-bleed tu-klein'
      aria-labelledby='tu-start'
    >
      <svg
        className='tu-closing-art tu-drift'
        viewBox='0 0 1200 320'
        aria-hidden='true'
      >
        <path d='M600 160C493.4 57.4 407.6 4.2 293.2 4.2C150.2 4.2 69.6 72.6 69.6 160C69.6 247.4 150.2 315.8 293.2 315.8C407.6 315.8 493.4 262.6 600 160C706.6 57.4 792.4 4.2 906.8 4.2C1049.8 4.2 1130.4 72.6 1130.4 160C1130.4 247.4 1049.8 315.8 906.8 315.8C792.4 315.8 706.6 262.6 600 160Z' />
        <path d='M600 160C500.8 73.6 420.9 28.8 314.4 28.8C181.3 28.8 106.3 86.4 106.3 160C106.3 233.6 181.3 291.2 314.4 291.2C420.9 291.2 500.8 246.4 600 160C699.2 73.6 779.1 28.8 885.6 28.8C1018.7 28.8 1093.7 86.4 1093.7 160C1093.7 233.6 1018.7 291.2 885.6 291.2C779.1 291.2 699.2 246.4 600 160Z' />
        <path d='M600 160C508.2 89.8 434.2 53.4 335.7 53.4C212.5 53.4 143 100.2 143 160C143 219.8 212.5 266.6 335.7 266.6C434.2 266.6 508.2 230.2 600 160C691.8 89.8 765.8 53.4 864.3 53.4C987.5 53.4 1057 100.2 1057 160C1057 219.8 987.5 266.6 864.3 266.6C765.8 266.6 691.8 230.2 600 160Z' />
        <path d='M600 160C515.5 106 447.6 78 356.9 78C243.6 78 179.8 114 179.8 160C179.8 206 243.6 242 356.9 242C447.6 242 515.5 214 600 160C684.5 106 752.4 78 843.1 78C956.4 78 1020.2 114 1020.2 160C1020.2 206 956.4 242 843.1 242C752.4 242 684.5 214 600 160Z' />
        <path d='M600 160C522.9 122.2 460.9 102.6 378.2 102.6C274.8 102.6 216.5 127.8 216.5 160C216.5 192.2 274.8 217.4 378.2 217.4C460.9 217.4 522.9 197.8 600 160C677.1 122.2 739.1 102.6 821.8 102.6C925.2 102.6 983.5 127.8 983.5 160C983.5 192.2 925.2 217.4 821.8 217.4C739.1 217.4 677.1 197.8 600 160Z' />
        <path d='M600 160C530.3 138.4 474.2 127.2 399.4 127.2C305.9 127.2 253.2 141.6 253.2 160C253.2 178.4 305.9 192.8 399.4 192.8C474.2 192.8 530.3 181.6 600 160C669.7 138.4 725.8 127.2 800.6 127.2C894.1 127.2 946.8 141.6 946.8 160C946.8 178.4 894.1 192.8 800.6 192.8C725.8 192.8 669.7 181.6 600 160Z' />
      </svg>
      <div className='tu-wrap tu-reveal'>
        <div>
          <span className='tu-mono'>Nº 02 — Begin</span>
          <h2 id='tu-start'>
            {t('Connect good ideas')}
            <br />
            {t('with good models.')}
          </h2>
          <p>{t('Start with your first question and put AI to work.')}</p>
        </div>
        <Link
          className='tu-button tu-solid'
          to={isAuthenticated ? '/dashboard' : '/sign-up'}
        >
          {isAuthenticated ? t('Go to Console') : t('Get Started')}
          <i aria-hidden='true'>→</i>
        </Link>
      </div>
    </section>
  )
}
