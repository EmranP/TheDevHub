import { Params } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { TRequestServerHandler } from '../../../../users/types/api/fetch-users-method.interface'
import { setPostData } from './set-post-data'

export const loadPostAsync =
	(requestServer: TRequestServerHandler, postId: Readonly<Params<string>>) =>
	async (dispatch: Dispatch<ActionRoot>) => {
		try {
			const postData = await requestServer('fetchPost', postId)

			if (postData && postData?.res) {
				dispatch(setPostData(postData.res))
			}

			return postData
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.log('Error load-post-async :(')
			}
		}
	}
