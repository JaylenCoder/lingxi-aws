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

import { toIntlLocale } from '@/i18n/languages'

import '@/styles/token-unlimited-home.css'

import { useHomeBrand } from '../../hooks'
import { TuClosing } from './closing'
import { TuDetails } from './details'
import { TuHero } from './hero'
import { TuNoCap } from './nocap'

// 复刻自 token-unlimited.com 首页，样式全部限定在 .tu-home 作用域内
export function TokenUnlimitedHome() {
  const { t, i18n } = useTranslation()
  const brand = useHomeBrand()
  const lang = toIntlLocale(i18n.resolvedLanguage || i18n.language)
  return (
    <main className='tu-home' lang={lang}>
      <TuHero />
      <TuDetails />
      <TuNoCap />
      <TuClosing />
      <footer className='tu-footer tu-wrap tu-mono'>
        <strong>{brand}</strong>
        <span>
          {t(
            'Independent model relay service · See the Model Square for available models and prices'
          )}
        </span>
      </footer>
    </main>
  )
}
