import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
  interface StaticDataRouteOption {
    /** Render the page without the app header, such as sign-in. */
    fullScreen?: boolean
  }
  interface HistoryState {
    /** E.164 number passed from sign-in to /verify. Kept out of the URL. */
    phone?: string
  }
}
