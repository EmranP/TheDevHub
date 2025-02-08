import { ActionType } from '../../../../app/constant/actions-types'
import { API_URL_AUTH_LOGOUT } from '../../../../app/constant/api'
import { AuthorizeResultResponseType } from '../../../../features/auth/types/operations/server'
import { request } from '../../../../utils/request.util'
import { ActionRootUser } from '../../types/actions/action'

export const setUser = (
	user: AuthorizeResultResponseType | null
): ActionRootUser => ({
	type: ActionType.SET_USER,
	payload: user,
})

export const logout = (): ActionRootUser => {
	request(API_URL_AUTH_LOGOUT, "POST")

	return { type: ActionType.LOGOUT }
}
