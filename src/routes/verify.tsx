import { createFileRoute } from '@tanstack/react-router'
import { VerifyPage } from '../pages/VerifyPage'

export const Route = createFileRoute('/verify')({
  component: VerifyPage,
  staticData: { fullScreen: true },
})
