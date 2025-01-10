import { FC } from 'react'
import styled from 'styled-components'
import { ErrorUIProps } from '../../shared/types/ui'
import { Title } from '../../shared/ui'

const ErrorUIContainer: FC<ErrorUIProps> = ({ className, error }) => {
	return (
		<>
			{error && (
				<div className={className}>
					<Title textAlgin={'center'} title='Ошибка' />
					<div>{error}</div>
				</div>
			)}
		</>
	)
}

export const ErrorUI = styled(ErrorUIContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > div {
		font-size: 20px;
		font-weight: bold;
	}
`
