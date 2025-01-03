import { FC } from 'react'
import styled from 'styled-components'
import { TitleProps } from '../types/ui'

const TitleContainer: FC<TitleProps> = ({ title, className }) => {
	return <h1 className={className}>{title}</h1>
}

export const Title = styled(TitleContainer)<TitleProps>`
	text-align: ${props => (props.textAlign ? props.textAlign : 'start')};
	font-weight: 600;
	font-size: 33px;
	color: #1c1c1c;
	margin-bottom: 40px;
`
