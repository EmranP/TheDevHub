import { ActionType } from '../../../../app/constant/actions-types'
import { server } from '../../../../features/auth/model/server'
import { SessionRolesType } from '../../../../features/auth/types/server'
import { ActionRootUser } from '../../types/action'
import { InitUserStateType } from '../../types/user-init.interface'

export const setUser = (user: InitUserStateType | null): ActionRootUser => ({
	type: ActionType.SET_USER,
	payload: user,
})

export const logout = (session: SessionRolesType): ActionRootUser => {
	server.logout(session)

	return { type: ActionType.LOGOUT }
}
