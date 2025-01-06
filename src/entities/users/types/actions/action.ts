import { ActionType } from '../../../../app/constant/actions-types'
import { AuthorizeResultResponseType } from '../../../../features/auth/types/operations/server'
import { InitUserStateType } from '../ui/user-row.interface'

export interface ActionUserSetSession {
	type: typeof ActionType.SET_USER
	payload: AuthorizeResultResponseType | null
}

export interface ActionLogout {
	type: typeof ActionType.LOGOUT
}

export interface ActionSetUser {
	type: typeof ActionType.SET_USER
	payload: InitUserStateType | null
}

export type ActionRootUser = ActionUserSetSession | ActionLogout | ActionSetUser
