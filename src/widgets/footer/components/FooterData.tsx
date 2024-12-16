import { FC } from 'react'
import styled from 'styled-components'
import { formatDate } from '../../../utils/formatDate'

const FooterDateStyled = styled.span`
	display: block;
	font-weight: 700;
	font-size: 25px;
	margin-bottom: 10px;
	color: #1c1c1c;
`

const FooterDateButtonStyled = styled.button`
	padding: 15px 130px;
	font-weight: 700;
	font-size: 25px;
	border: none;
	cursor: pointer;
	color: #1c1c1c;
	background-color: #808080;
`

export const FooterDate: FC = () => {
	const date = new Date()
	const formattedDate: string = formatDate(date)
	return (
		<div>
			<FooterDateStyled>{formattedDate}</FooterDateStyled>
			<FooterDateButtonStyled>Погода</FooterDateButtonStyled>
		</div>
	)
}
