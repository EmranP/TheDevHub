import { ActionType } from '../../../../app/constant/actions-types'
import { server } from '../../../../features/auth/model/server'
import {
	AuthorizeResultResponseType,
	SessionRolesType,
} from '../../../../features/auth/types/server'
import { ActionRootUser } from '../../types/action'

export const setUser = (
	user: SessionRolesType | AuthorizeResultResponseType | null
): ActionRootUser => ({
	type: ActionType.SET_USER,
	payload: user,
})

export const logout = (session: string | null): ActionRootUser => {
	if (session) {
		server.logout(session)
	}

	return { type: ActionType.LOGOUT }
}
