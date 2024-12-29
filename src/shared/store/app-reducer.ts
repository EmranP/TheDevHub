import { ActionType } from '../../app/constant/actions-types'
import { ActionRoot } from '../types/store/action-root'

const initialAppState = {
	wasLogout: false,
}

export const appReducer = (state = initialAppState, action: ActionRoot) => {
	switch (action.type) {
		case ActionType.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			}
		default:
			return state
	}
}
