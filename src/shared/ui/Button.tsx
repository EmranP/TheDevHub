/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react'
import styled from 'styled-components'
import { ButtonProps } from '../types/ui'

const ButtonStyled: FC<ButtonProps> = ({
	children,
	className,
	width,
	...props
}) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

export const Button = styled(ButtonStyled)`
	display: block;
	padding: 15px 20px;
	border: 2px solid #1c1c1c;
	border-radius: 2px;
	width: ${({ width = '100%' }) =>
		typeof width === 'string' ? width : `${width}px`};
	background-color: #afafaf;
	cursor: pointer;

	font-weight: 400;
	font-size: 20px;
	letter-spacing: -0.03em;
	color: #1c1c1c;
`
