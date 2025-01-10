import { Roles } from '../../../../shared/types/db/roles.interface'

export interface InitUserStateType {
	id: number | string | null
	login: string | null
	roleId: number | string | null
	session: string | null
}

export interface UserRowProps {
	className?: string
	id: number | string
	login: string
	registeredAt: string
	roleId: number
	roles: Roles[] | undefined
	userRemoveHandler: () => void
}
