import { FC } from 'react'
import styled from 'styled-components'
import { Container } from '../../shared/ui/Container'
import { Title } from '../../shared/ui/Title'
import { AuthorizationProps } from './types/authorization.interface'
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
