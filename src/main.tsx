import '@styles/global.scss'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from './app/provider/router'
import './index.scss'

createRoot(document.getElementById('root')!).render(
	// <StrictMode>
	<BrowserRouter />
	// </StrictMode>
)
