import { FC } from 'react'
import styled from 'styled-components'
import { TitleProps } from '../types/ui/title.interface'

const TitleContainer: FC<TitleProps> = ({ title, className }) => {
	return <h1 className={className}>{title}</h1>
}

export const Title = styled(TitleContainer)`
	font-weight: 600;
	font-size: 33px;
	color: #1c1c1c;
	margin-bottom: 20px;
`
