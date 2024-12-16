import { CodeXml } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoBlockStyle = styled.div`
	display: flex;
	gap: 15px;
	algin-items: center;
`

const LogoIconStyle = styled.div`
	margin: auto 0;
`

const LogoTitleStyle = styled.h1`
	font-weight: 700;
	font-size: 68px;
	color: #1c1c1c;
`

export const Logo: FC = () => {
	return (
		<LogoBlockStyle>
			<LogoIconStyle>
				<Link to='/' style={{ color: '#1C1C1C' }}>
					<CodeXml height={86} width={116} cursor={'pointer'} />
				</Link>
			</LogoIconStyle>
			<div>
				<LogoTitleStyle>Блог</LogoTitleStyle>
				<h2>веб-разработчика</h2>
			</div>
		</LogoBlockStyle>
	)
}
