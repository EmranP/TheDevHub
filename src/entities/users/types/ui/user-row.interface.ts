import { Roles } from '../../../../shared/types/db/roles.interface'

export interface InitUserStateType {
	id: number | null
	login: string | null
	roleId: number
	session: string | null
}

export interface UserRowProps {
	className?: string
	id: number
	login: string
	registeredAt: string
	roleId: number
	roles: Roles[] | undefined
	userRemoveHandler: () => void
}
