export interface AuthorizeResult {
	error: null | string
	res: SessionRolesType | null
}

export interface InitSession {
	logout: () => void
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
