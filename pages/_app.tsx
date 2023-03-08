
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme } from '../themes'
import { UiProvider } from '../context/ui'

import { Raleway } from '@next/font/google'
import { EmpresasProvider } from '../context/empresas'
import { LangProvider } from '../context/lang'

const raleway = Raleway({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <EmpresasProvider>
      <LangProvider>
        
        <UiProvider>
        <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        
        <Component {...pageProps} />
      
        </ThemeProvider>
        </UiProvider>
      </LangProvider>
    </EmpresasProvider>
    ) 
}
