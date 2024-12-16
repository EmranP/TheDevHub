import { CodeXml } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoBlockStyle = styled(Link)`
	display: flex;
	gap: 15px;
	algin-items: center;
`

const LogoIconStyle = styled.div`
	margin: auto 0;
`

const LogoTitleStyle = styled.h1`
	font-weight: 500;
	font-size: 68px;
	color: #1c1c1c;
`

const LogoSubTitleStyle = styled.h2`
	font-weight: 500;
	font-size: 24px;
	color: #1c1c1c;
`

export const Logo: FC = () => {
	return (
		<LogoBlockStyle to={'/'}>
			<LogoIconStyle>
				<CodeXml height={86} width={116} color='#1c1c1c' cursor={'pointer'} />
			</LogoIconStyle>
			<div>
				<LogoTitleStyle>Блог</LogoTitleStyle>
				<LogoSubTitleStyle>веб-разработчика</LogoSubTitleStyle>
			</div>
		</LogoBlockStyle>
	)
}
