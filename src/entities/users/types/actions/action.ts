import { ActionType } from '../../../../app/constant/actions-types'
import { AuthorizeResultResponseType } from '../../../../features/auth/types/operations/server'

export interface ActionUserSetSession {
	type: typeof ActionType.SET_USER
	payload: AuthorizeResultResponseType | null
}

export interface ActionLogout {
	type: typeof ActionType.LOGOUT
}

export type ActionRootUser = ActionUserSetSession | ActionLogout
