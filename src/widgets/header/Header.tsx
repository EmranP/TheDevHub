import { FC } from 'react'
import styled from 'styled-components'
import { ComponentPropsType } from '../../shared/types/ui'
import { HeaderAbout, HeaderAction, Logo } from './components'

const HeaderContainer: FC<ComponentPropsType> = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
			<HeaderAbout />
			<HeaderAction />
		</header>
	)
}

export const Header = styled(HeaderContainer)<ComponentPropsType>`
	position: fixed;
	top: 0;
	width: 1200px;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	height: 175px;
	border-bottom: 3px solid #adadad;
	box-shadow: 0px 7px 35px 1px #616161;
`
