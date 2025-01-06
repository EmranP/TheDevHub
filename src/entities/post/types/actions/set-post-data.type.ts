import { ActionType } from '../../../../app/constant/actions-types'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { IPostData } from '../../../../shared/types/db/posts.interface'

export interface ActionSetPostData {
	type: typeof ActionType.SET_POST_DATA
	payload: RequestResult<IPostData | null>
}
