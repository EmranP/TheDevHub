import { ActionLogout } from '../../../entities/user/types/action'

export interface AuthorizeResult<T> {
	error: null | string
	res: T | null
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

export interface ReaderSession extends InitSession {}

export type SessionRolesType =
	| InitSession
	| AdminSession
	| ModeratorSession
	| ReaderSession
