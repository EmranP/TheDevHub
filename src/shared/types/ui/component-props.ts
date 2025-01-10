import { ReactNode } from 'react'

export type ComponentPropsType = {
	className?: string
}

export interface WrapperPropsType extends ComponentPropsType {
	children: ReactNode
}

export interface ErrorUIProps extends ComponentPropsType {
	error: string | null
}

export interface ComponentPrivateContentProps extends WrapperPropsType {
	serverError?: string | null
	access?: [string | number | null]
}
