import { ActionType } from '../../../../app/constant/actions-types'
import { ROLE } from '../../../../app/constant/role'
import { ActionRoot } from '../../../../shared/types/store/action-root'
import { InitUserStateType } from '../../types/user-init.interface'

const initialUserState: InitUserStateType = {
	id: null,
	login: null,
	role_id: ROLE.GUEST,
	session: null,
}

export const userReducer = (
	state: InitUserStateType = initialUserState,
	action: ActionRoot
): InitUserStateType => {
	switch (action.type) {
		case ActionType.SET_USER:
			return { ...state, ...action.payload }

		case ActionType.LOGOUT:
			return initialUserState

		default:
			return state
	}
}
