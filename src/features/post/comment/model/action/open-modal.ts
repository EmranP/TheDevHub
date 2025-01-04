import { ActionType } from '../../../../../app/constant/actions-types'

export const openModal = modalParams => ({
	type: ActionType.OPEN_MODAL,
	payload: modalParams,
})
