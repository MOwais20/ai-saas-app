
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key (optional during development)
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const Root = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (PUBLISHABLE_KEY) {
  createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      {Root}
    </ClerkProvider>,
  )
} else {
  // Avoid throwing in local dev; log and render app without Clerk
  // eslint-disable-next-line no-console
  console.warn('VITE_CLERK_PUBLISHABLE_KEY is not set — rendering without ClerkProvider')
  createRoot(document.getElementById('root')).render(Root)
}
