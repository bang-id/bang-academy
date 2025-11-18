import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

// Mobile viewport helper: set a CSS variable `--vh` to 1% of the window innerHeight
// and update it on resize. This avoids the mobile 100vh problem where browser
// chrome (address bar) causes layout jumps on load/resize.
function setVh() {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

setVh()
let resizeTimer: any = null
window.addEventListener('resize', () => {
  // debounce to avoid thrashing on mobile
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(setVh, 150)
})

// Prevent browsers from restoring scroll position on history navigation or reload
if ('scrollRestoration' in history) {
  try {
    history.scrollRestoration = 'manual'
  } catch (e) {
    // ignore if not allowed
  }
}
// Ensure the page starts at the top on first load
window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
