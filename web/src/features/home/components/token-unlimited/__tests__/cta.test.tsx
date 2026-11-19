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
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import { DEFAULT_SYSTEM_NAME } from '@/lib/constants'
import { useAuthStore } from '@/stores/auth-store'
import { useSystemConfigStore } from '@/stores/system-config-store'

import { TokenUnlimitedHome } from '..'
import { FALLBACK_HOME_BRAND } from '../../../hooks'

async function renderHome() {
  const root = createRootRoute({ component: TokenUnlimitedHome })
  const router = createRouter({
    routeTree: root,
    history: createMemoryHistory({ initialEntries: ['/'] }),
  })
  render(<RouterProvider router={router} />)
  return screen.findByRole('heading', { level: 1 })
}

function heroSection() {
  return screen.getByRole('region', { name: /Full-capability models/ })
}

function closingSection() {
  return screen.getByRole('region', { name: /Connect good ideas/ })
}

beforeEach(() => {
  useAuthStore.getState().auth.setUser(null)
  useSystemConfigStore.getState().setConfig({ systemName: DEFAULT_SYSTEM_NAME })
})

afterEach(() => {
  useAuthStore.getState().auth.setUser(null)
  useSystemConfigStore.getState().setConfig({ systemName: DEFAULT_SYSTEM_NAME })
  localStorage.clear()
})

describe('token unlimited home CTA', () => {
  it('links guests to sign-up from the hero and closing sections', async () => {
    await renderHome()

    for (const section of [heroSection(), closingSection()]) {
      expect(
        within(section).getByRole('link', { name: /Get Started/ })
      ).toHaveAttribute('href', '/sign-up')
      expect(
        within(section).queryByRole('link', { name: /Go to Console/ })
      ).toBeNull()
    }
  })

  it('links signed-in users to the console from the hero and closing sections', async () => {
    useAuthStore.getState().auth.setUser({ id: 1, username: 'u', role: 1 })

    await renderHome()

    for (const section of [heroSection(), closingSection()]) {
      expect(
        within(section).getByRole('link', { name: /Go to Console/ })
      ).toHaveAttribute('href', '/dashboard')
    }
  })

  it('always offers the pricing link in the hero', async () => {
    await renderHome()

    expect(
      within(heroSection()).getByRole('link', {
        name: 'View models and pricing',
      })
    ).toHaveAttribute('href', '/pricing')
  })
})

describe('token unlimited home brand', () => {
  it('uses the fallback brand when the system name is the default', async () => {
    await renderHome()

    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      FALLBACK_HOME_BRAND
    )
    expect(screen.queryByText(DEFAULT_SYSTEM_NAME)).toBeNull()
  })

  it('uses the configured system name everywhere when one is set', async () => {
    useSystemConfigStore.getState().setConfig({ systemName: 'Acme Gateway' })

    await renderHome()

    expect(screen.getByRole('contentinfo')).toHaveTextContent('Acme Gateway')
    expect(within(heroSection()).getByText('— Acme Gateway.')).toBeVisible()
    expect(screen.queryByText(new RegExp(FALLBACK_HOME_BRAND))).toBeNull()
  })
})
