import { ChangeEventHandler, InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export type InputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	keyof UseFormRegisterReturn
> &
	Partial<UseFormRegisterReturn> & {
		className?: string
		width?: string | number
		onChange?: ChangeEventHandler<HTMLInputElement>
	}
