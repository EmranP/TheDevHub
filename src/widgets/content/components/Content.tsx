import { FC } from 'react'
import styled from 'styled-components'
import { ComponentContentPropsType } from '../../../shared/types/ui'
import { Title } from '../../../shared/ui'

const ContentContainerUI: FC<ComponentContentPropsType> = ({
	className,
	children,
	error,
}) => {
	return (
		<>
			{error ? (
				<div className={className}>
					<Title textAlgin={true} title='Ошибка' />
					<div>{error}</div>
				</div>
			) : (
				children
			)}
		</>
	)
}

export const Content = styled(ContentContainerUI)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div {
		font-size: 20px;
		font-weight: bold;
	}
`
