/* eslint-disable @typescript-eslint/no-unused-vars */

import { forwardRef } from 'react'
import styled from 'styled-components'
import { InputProps } from '../../features/auth/types/ui/index.types'

const InputForm = forwardRef<HTMLInputElement, InputProps>(
	({ className, width, ...props }, ref) => {
		return <input className={className} {...props} ref={ref} />
	}
)

export const Input = styled(InputForm)`
	display: block;
	padding: 15px 20px;
	border: 2px solid #1c1c1c;
	border-radius: 2px;
	width: ${({ width = '100%' }) =>
		typeof width === 'string' ? width : `${width}px`};
	font-weight: 400;
	font-size: 20px;
	letter-spacing: -0.03em;
	color: #1c1c1c;

	&::placeholder {
		font-weight: 400;
		font-size: 20px;
		letter-spacing: -0.03em;
		color: #1c1c1c;
	}
`
