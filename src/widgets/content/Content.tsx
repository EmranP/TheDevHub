import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../../shared/ui/Container'

const MainContent = styled.main`
	padding: 120px 0;
`

export const Content: FC = () => {
	return (
		<MainContent>
			<Container>
				<Outlet />
			</Container>
		</MainContent>
	)
}
