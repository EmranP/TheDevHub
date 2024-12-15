import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const ContainerStyle = styled.div`
	max-width: 1600px;
	margin: 0 auto;
	padding: 0 30px;
`

export const Container: FC<PropsWithChildren> = ({ children }) => {
	return <ContainerStyle>{children}</ContainerStyle>
}
