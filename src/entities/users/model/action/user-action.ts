import { ActionType } from '../../../../app/constant/actions-types'
import { server } from '../../../../features/auth/model/server'
import { AuthorizeResultResponseType } from '../../../../features/auth/types/operations/server'
import { ActionRootUser } from '../../types/actions/action'

export const setUser = (
	user: AuthorizeResultResponseType | null
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
