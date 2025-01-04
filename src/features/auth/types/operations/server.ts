import { ROLE } from '../../../../app/constant/role'
import { UserTransform } from '../../../../shared/types/db/index.types'

export interface RequestResult<T> {
	error: null | string
	res: T | null
}

export interface AuthorizationSessionResponseProps {
	create: (user: UserTransform) => string
	remove: (hash: string | number) => void
	access: (hash: string | number, accessRoles: ROLE[]) => Promise<boolean>
}

export type AuthorizeResultResponseType = Omit<
	UserTransform,
	'password' | 'registeredAt'
> & {
	session: string
}

export interface InitSession {
	logout: (session: string) => void
}
