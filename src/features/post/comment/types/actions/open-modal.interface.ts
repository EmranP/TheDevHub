import { ActionType } from '../../../../../app/constant/actions-types'
import { IModalAppState } from '../../../../../shared/types/store/app-state.interface'

export interface ActionOpenModal {
	type: typeof ActionType.OPEN_MODAL
	payload: IModalAppState
}
