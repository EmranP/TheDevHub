import { ActionType } from '../../app/constant/actions-types'
import { ActionRoot } from '../types/store/action-root'

const initialAppState = {
	wasLogout: false,
	modal: {
		isOpen: false,
		text: '',
		onConfirm: () => {},
		onCancel: () => {},
	},
}

export const appReducer = (state = initialAppState, action: ActionRoot) => {
	switch (action.type) {
		case ActionType.LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			}
		case ActionType.OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			}
		case ActionType.CLOSE_MODAL:
			return initialAppState
		default:
			return state
	}
}
