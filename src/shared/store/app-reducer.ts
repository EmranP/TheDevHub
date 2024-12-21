import { ActionType } from '../../app/constant/actions-types'

const initialAppState = {
	wasLogout: false,
}

export const appReducer = (state = initialAppState, action) => {
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
