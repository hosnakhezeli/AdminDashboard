import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import theme from './lib/theme.ts'
import Rtl from './components/Rtl/Rtl.tsx'
import { CssBaseline } from '@mui/material'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Rtl>
        <CssBaseline />
        <App />
      </Rtl>
    </ThemeProvider>
  </StrictMode>,
)
