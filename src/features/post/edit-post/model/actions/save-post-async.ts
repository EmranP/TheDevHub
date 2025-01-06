import { Dispatch } from 'redux'
import { setPostData } from '../../../../../entities/post/model/current-post/actions/set-post-data'
import { TRequestServerHandler } from '../../../../../entities/users/types/api/fetch-users-method.interface'
import {
	IPostData,
	IPostDataSave,
} from '../../../../../shared/types/db/posts.interface'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { RequestResult } from '../../../../auth/types/operations/server'

export const savePostAsync =
	(requestServer: TRequestServerHandler, savePostData: IPostDataSave) =>
	async (
		dispatch: Dispatch<ActionRoot>
	): Promise<RequestResult<IPostData | null>> => {
		try {
			const updatedPost = await requestServer('savePost', savePostData)

			if (updatedPost && updatedPost.res) {
				dispatch(setPostData(updatedPost.res))
			} else {
				console.error('Failed to fetch post data:', updatedPost?.error)
			}

			return updatedPost
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.log('Error load-post-async :(')
			}
			return { error: 'An error occurred', res: null }
		}
	}
