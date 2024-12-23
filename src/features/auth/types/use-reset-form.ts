import { UseFormReset } from 'react-hook-form'

interface LogoutRegProps {
	reset: UseFormReset<{
		login: string
		password: string
		passCheck: string
	}>
}

interface LogoutLoginProps {
	reset: UseFormReset<{
		login: string
		password: string
	}>
}

export type LogoutProps = LogoutRegProps | LogoutLoginProps
