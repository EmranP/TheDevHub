import { ActionType } from '../../../app/constant/actions-types'
import {
	AuthorizeResultResponseType,
	SessionRolesType,
} from '../../../features/auth/types/server'

export interface ActionUserSetSession {
	type: typeof ActionType.SET_USER
	payload: SessionRolesType | AuthorizeResultResponseType | null
}

export interface ActionLogout {
	type: typeof ActionType.LOGOUT
}

export type ActionRootUser = ActionUserSetSession | ActionLogout
