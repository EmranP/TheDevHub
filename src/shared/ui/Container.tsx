import { FC } from 'react'
import styled from 'styled-components'
import { WrapperPropsType } from '../types/ui/component-props'

const ContainerStyled: FC<WrapperPropsType> = ({ children, className }) => (
	<div className={className}>{children}</div>
)

export const Container = styled(ContainerStyled)`
	max-width: 900px;
	margin: 0 auto;
`
