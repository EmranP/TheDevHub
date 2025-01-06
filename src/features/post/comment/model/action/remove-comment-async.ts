import { Dispatch } from 'react'
import { setPostData } from '../../../../../entities/post/model/current-post/actions/set-post-data'
import { TRequestServerHandler } from '../../../../../entities/users/types/api/fetch-users-method.interface'
import { ActionRoot } from '../../../../../shared/types/store/action-root'

export const removeCommentAsync =
	(
		requestServer: TRequestServerHandler,
		postId: string | number,
		id: string | number
	) =>
	async (dispatch: Dispatch<ActionRoot>) => {
		try {
			const postData = await requestServer('removeComment', postId, id)

			if (postData && postData.res) {
				dispatch(setPostData(postData.res))
			} else {
				console.error('Failed to fetch post data:', postData?.error)
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.log('Error load-post-async :(')
			}
		}
	}
