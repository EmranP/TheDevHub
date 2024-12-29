import { FC } from 'react'
import styled from 'styled-components'
import { TitleProps } from '../types/ui'

const TitleContainer: FC<TitleProps> = ({ title, className }) => {
	return <h1 className={className}>{title}</h1>
}

export const Title = styled(TitleContainer)`
	text-align: center;
	font-weight: 600;
	font-size: 33px;
	color: #1c1c1c;
	margin-bottom: 20px;
`
