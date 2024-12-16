import { FC } from 'react'
import styled from 'styled-components'
import { ComponentPropsType } from '../../shared/types/ui/component-props'
import { FooterContact } from './components/FooterContact'
import { FooterDate } from './components/FooterData'

export const FooterContainer: FC<ComponentPropsType> = ({ className }) => {
	return (
		<footer className={className}>
			<FooterContact />
			<FooterDate />
		</footer>
	)
}

export const Footer = styled(FooterContainer)<ComponentPropsType>`
	position: fixed;
	bottom: 0;
	width: 1200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 15px;
	height: 165px;
	background-color: #fff;
	border-bottom: 3px solid #adadad;
	box-shadow: 0px 7px 35px 1px #616161;
`
