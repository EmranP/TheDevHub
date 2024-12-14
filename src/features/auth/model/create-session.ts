import { ROLE } from '../../../app/constant/role'
import {
	AdminSession,
	InitSession,
	ModeratorSession,
	ReaderSession,
	SessionRolesType,
} from '../types/server'
import { removeComment } from './session'

export const createSession = (roleId: number): SessionRolesType => {
	const session: InitSession = {
		logout() {
			Object.keys(this).forEach(key => {
				delete (this as unknown as Record<string, unknown>)[key]
			})
		},
	}

	switch (roleId) {
		case ROLE.ADMIN:
			return { ...session, removeComment } as AdminSession
		case ROLE.MODERATOR:
			return { ...session, removeComment } as ModeratorSession

		case ROLE.READER:
			return { ...session, removeComment } as ReaderSession
		default:
			// ничего не делать
			return session as InitSession
	}
}
