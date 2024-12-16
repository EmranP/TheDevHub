import { FC } from 'react'
import styled from 'styled-components'

const FooterContactStyled = styled.div`
	width: 290px;
`
const FooterCOntactSpanStyle = styled.span`
	font-weight: 700;
	font-size: 25px;
	color: #1c1c1c;
`

export const FooterContact: FC = () => {
	return (
		<FooterContactStyled>
			<FooterCOntactSpanStyle>
				Блог веб-разработчика nightsking12345@gmail.com
			</FooterCOntactSpanStyle>
		</FooterContactStyled>
	)
}
