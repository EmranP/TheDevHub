import { Dispatch, SetStateAction } from 'react'

export interface AuthErrorMessageProps {
	className?: string
	error: string
}

export interface AuthErrorMessageHookType {
	errorAuth: string | null
	setErrorAuth: Dispatch<SetStateAction<string | null>>
}
