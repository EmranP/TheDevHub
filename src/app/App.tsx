import styled from 'styled-components'
import { server } from '../features/auth/model/btf'
import { HomePage } from '../pages/home/HomePage'

const Title = styled.h1`
	color: red;
`

export const App = () => {
	const userLogin = 'TTweII'
	const userPassword = 'dess2211'
	const testServerHandler = () => server.authorize(userLogin, userPassword)
	return (
		<div>
			<Title>Test</Title>
			<HomePage />
			<button onClick={testServerHandler}>Test server</button>
		</div>
	)
}
