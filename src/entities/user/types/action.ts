import { ActionType } from '../../../app/constant/actions-types'
import { InitUserStateType } from './user-init.interface'

export interface ActionUserSetSession {
	type: typeof ActionType.SET_USER
	payload: InitUserStateType | null
}

export interface ActionLogout {
	type: typeof ActionType.LOGOUT
}

export type ActionRootUser = ActionUserSetSession | ActionLogout
