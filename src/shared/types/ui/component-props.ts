import { ReactNode } from 'react'

export type ComponentPropsType = {
	className?: string
}

export interface WrapperPropsType extends ComponentPropsType {
	children: ReactNode
}

export interface ComponentContentPropsType extends WrapperPropsType {
	error: string | null
}
