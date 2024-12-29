import { ROLE } from '../../../../app/constant/role'
import { UserTransform } from '../../../../shared/types/db/index.types'

export interface AuthorizeResult<T> {
	error: null | string
	res: T | null
}

export interface AuthorizationSessionResponseProps {
	list: Record<string, UserTransform>
	create: (user: UserTransform) => string
	remove: (hash: string | number) => void
	access: (hash: string | number, accessRoles: ROLE[]) => boolean
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
