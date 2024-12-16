import { FC } from 'react'
import styled from 'styled-components'
import {
	ComponentPropsType,
	WrapperPropsType,
} from '../types/ui/component-props'

const WrapperContainer: FC<WrapperPropsType> = ({ className, children }) => {
	return <div className={className}>{children}</div>
}

export const Wrapper = styled(WrapperContainer)<ComponentPropsType>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1230px;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
`
