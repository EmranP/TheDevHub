import { FC } from 'react'
import styled from 'styled-components'
import { AuthErrorMessageProps } from '../types/error-message.interface'

const AuthErrorMessageContainer: FC<AuthErrorMessageProps> = ({
	children,
	className,
}) => {
	return <div className={className}>{children}</div>
}

export const AuthErrorMessage = styled(AuthErrorMessageContainer)`
	border: 2px solid #1c1c1c;
	border-radius: 2px;
	width: 100%;
	padding: 15px 20px;
	background-color: #f88a89;

	span {
		font-weight: 400;
		font-size: 20px;
		letter-spacing: -0.03em;
		color: #1c1c1c;
	}
`
