import { FC } from 'react'
import styled from 'styled-components'
import { AuthBodyProps } from '../types/ui/index.types'

const AuthBodyContainer: FC<AuthBodyProps> = ({ children, className }) => {
	return <div className={className}>{children}</div>
}

export const AuthBody = styled(AuthBodyContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 15px;
	margin: 0 auto 10px auto;
	max-width: 300px;
`
