import { Dispatch, SetStateAction } from 'react'
import { ComponentPropsType } from '../../../../shared/types/ui'

export interface IPaginationProps extends ComponentPropsType {
	setPage: Dispatch<SetStateAction<number>>
	page: number
	lastPage: number | string
}
