import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from './app/provider/router'
import './app/styles/global.scss'
import './index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter />
	</StrictMode>
)
