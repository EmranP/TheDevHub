import { FC } from 'react'
import styled from 'styled-components'
import { Container, Title } from '../../shared/ui'
import { AuthorizationProps } from './types/operations/authorization.interface'
import { AuthBody } from './ui/AuthBody'

export const Authorization: FC<AuthorizationProps> = ({
	title,
	children,
	handleSubmit,
	onSubmitHandler,
}) => {
	return (
		<Container>
			<AuthCenter>
				<Title title={title} />
				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<AuthBody>{children}</AuthBody>
				</form>
			</AuthCenter>
		</Container>
	)
}

const AuthCenter = styled.div`
	text-align: center;

	& > form {
		text-align: center;

		max-width: 700px;
		margin: 0 auto;
	}
`
