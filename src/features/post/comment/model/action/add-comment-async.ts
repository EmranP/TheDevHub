import { Dispatch } from 'redux'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { request } from '../../../../../utils/request.util'
import { API_URL_POST } from '../../../../../app/constant/api'
import { addCommentAction } from '../../../../../entities/post/model/current-post/actions/add-comment.action'

export const addCommentAsync =
	(
		postId: string | number,
		content: string
	) =>
	async (dispatch: Dispatch<ActionRoot>) => {
		try {
			await request(
				`${API_URL_POST}/${postId}comments`,
				'POST',
				content
			).then(comment => {
				if (comment && comment.data) {
				dispatch(addCommentAction(comment.data))
			} else {
				console.error('Failed to fetch post data:', comment?.error)
			}
			})
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.log('Error load-post-async :(')
			}
		}
	}
