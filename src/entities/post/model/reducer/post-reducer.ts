import { ActionType } from '../../../../app/constant/actions-types'
import { IPostData } from '../../../../shared/types/db/posts.interface'
import { ActionRoot } from '../../../../shared/types/store/action-root'

const initialPostState: IPostData = {
	id: '',
	title: '',
	image_url: '',
	content: '',
	published_at: '',
	comments: [],
}

export const postReducer = (
	state = initialPostState,
	action: ActionRoot
): IPostData => {
	switch (action.type) {
		case ActionType.SET_POST_DATA:
			return { ...state, ...action.payload }

		default:
			return state
	}
}
