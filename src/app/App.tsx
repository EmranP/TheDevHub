import iconTest from '@assets/vite.svg'
import { Home } from '../pages/home/Home'

export const App = () => {
	return (
		<div>
			<h1>Test</h1>
			<Home />
			<img src={iconTest} alt='' />
		</div>
	)
}
