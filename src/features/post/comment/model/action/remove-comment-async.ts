import { Dispatch } from 'react'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { request } from '../../../../../utils/request.util'
import { API_URL_POST } from '../../../../../app/constant/api'
import { removeComment } from '../../../../../entities/post/model/current-post/actions/remove-comment.action'

export const removeCommentAsync =
	(
		postId: string | number,
		id: string | number
	) =>
	async (dispatch: Dispatch<ActionRoot>) => {
		try {
			await request(`${API_URL_POST}/${postId}/comments/${id}`, 'DELETE').then(() => {
				if (postId || id) {
					dispatch(removeComment(id))
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
