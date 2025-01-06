import { ActionType } from '../../../../../app/constant/actions-types'
import { IModalAppState } from '../../../../../shared/types/store/app-state.interface'

export const openModal = (modalParams: IModalAppState) => ({
	type: ActionType.OPEN_MODAL,
	payload: modalParams,
})
