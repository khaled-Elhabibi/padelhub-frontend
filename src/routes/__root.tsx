import { createRootRoute } from '@tanstack/react-router'
import { AppShell } from '../components/AppShell'
import { NotFoundPage } from '../pages/NotFoundPage'

export const Route = createRootRoute({
  component: AppShell,
  notFoundComponent: NotFoundPage,
})
