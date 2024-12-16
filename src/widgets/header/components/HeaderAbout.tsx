import { FC } from 'react'
import styled from 'styled-components'

const HeaderAboutStyle = styled.div`
	display: flex;
	flex: 1 1 auto;
	justify-content: center;
`

const HeaderAboutTextStyle = styled.h2`
	width: 195px;
	font-style: italic;
	font-weight: 400;
	font-size: 25px;
	color: #1c1c1c;
`

export const HeaderAbout: FC = () => {
	return (
		<HeaderAboutStyle>
			<HeaderAboutTextStyle>
				Веб-технологии Написание кода Разбор ошибок
			</HeaderAboutTextStyle>
		</HeaderAboutStyle>
	)
}
