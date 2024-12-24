import { ActionLogout } from '../../../entities/users/types/action'
import { User } from '../../../shared/types/db/user.interface'

export interface AuthorizeResult<T> {
	error: null | string
	res: T | null
}

export interface AuthorizationSessionResponseProps {
	list: Record<string, User>
	create: (user: User) => string
	remove: (hash: string) => void
}

export type AuthorizeResultResponseType = Omit<
	User,
	'password' | 'registed_at'
> & {
	session: string
}

export interface InitSession {
	logout: (session: SessionRolesType) => ActionLogout
}

export interface AdminSession extends InitSession {
	removeComment: () => void
}

export interface ModeratorSession extends InitSession {
	removeComment: () => void
}

// export interface ReaderSession extends InitSession {}

export type SessionRolesType = InitSession | AdminSession | ModeratorSession
// | ReaderSession
