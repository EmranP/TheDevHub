import { SessionRolesType } from '../../../features/auth/types/server'

export interface InitUserStateType {
	id: number | null
	login: string | null
	roleId: number
	session: SessionRolesType | null
}
