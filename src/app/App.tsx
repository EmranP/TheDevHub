import styled from 'styled-components'
import { HomePage } from '../pages/home/HomePage'

const Title = styled.h1`
	color: red;
`

export const App = () => {
	return (
		<div>
			<Title>Test</Title>
			<HomePage />
		</div>
	)
}
