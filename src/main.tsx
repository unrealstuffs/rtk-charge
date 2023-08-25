import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@design-system-rt/rtk-ui-kit'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App.tsx'
import '@design-system-rt/rtk-fonts'
import 'app/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='rtk-charge'>
			<ThemeProvider themeName='dark' useCssVariables>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
