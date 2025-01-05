import { ActionType } from '../../../../app/constant/actions-types'
import { IPostData } from '../../../../shared/types/db/posts.interface'
import { ActionRoot } from '../../../../shared/types/store/action-root'

const initialPostState: IPostData = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	comments: [],
}

export const postReducer = (
	state = initialPostState,
	action: ActionRoot
): IPostData => {
	switch (action.type) {
		case ActionType.SET_POST_DATA:
			return { ...state, ...action.payload }
		case ActionType.RESET_POST_DATA:
			return initialPostState
		default:
			return state
	}
}
