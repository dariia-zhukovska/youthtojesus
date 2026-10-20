import { RouterProvider } from 'react-router'
import { LangProvider } from './LangContext'
import { router } from './routes'

export default function App() {
  return (
    <LangProvider>
      <RouterProvider router={router} />
    </LangProvider>
  )
}
