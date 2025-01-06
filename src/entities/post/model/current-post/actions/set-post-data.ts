import { ActionType } from '../../../../../app/constant/actions-types'
import { RequestResult } from '../../../../../features/auth/types/operations/server'
import { IPostData } from '../../../../../shared/types/db/posts.interface'
import { ActionRoot } from '../../../../../shared/types/store/action-root'

export const setPostData = (
	postData: RequestResult<IPostData | null>
): ActionRoot => ({
	type: ActionType.SET_POST_DATA,
	payload: postData,
})
