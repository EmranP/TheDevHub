import { ReactNode } from 'react'

export type ComponentPropsType = {
	className?: string
}

export interface WrapperPropsType {
	className?: string
	children: ReactNode
}
