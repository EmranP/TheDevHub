import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { ComponentPropsType } from '../../shared/types/ui'

const ContentContainer: FC<ComponentPropsType> = ({ className }) => {
	return (
		<main className={className}>
			<Outlet />
		</main>
	)
}

export const ContentPage = styled(ContentContainer)<ComponentPropsType>`
	padding: 270px 0 20px;
`
