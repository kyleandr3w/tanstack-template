// src/routes/__root.tsx
import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    title: 'SonoraX AV – Smart Systems Assistant',
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      {/* This manages document head in the browser */}
      <HeadContent />
      <Outlet />
    </>
  )
}
