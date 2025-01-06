import { ReactNode } from 'react'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

export interface AuthorizationProps {
	title: string
	children: ReactNode
	handleSubmit: (
		onValid: SubmitHandler<{
			login: string
			password: string
		}>,
		onInvalid?:
			| SubmitErrorHandler<{
					login: string
					password: string
			  }>
			| undefined
	) => (e?: React.BaseSyntheticEvent) => Promise<void>
	onSubmitHandler: ({
		login,
		password,
	}: {
		login: string
		password: string
	}) => Promise<void>
}
