import { Params } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { setPostData } from './set-post-data'
import { request } from '../../../../../utils/request.util'
import { API_URL_POST } from '../../../../../app/constant/api'

export const loadPostAsync =
	(postId: Readonly<Params<string>>) =>
	async (dispatch: Dispatch<ActionRoot>) => {
		try {
			await request(`${API_URL_POST}/${postId}`).then(postData => {
				if (postData && postData.data) {
					dispatch(setPostData(postData.data))
				}

				return postData
			})

		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.log('Error load-post-async :(')
			}
		}
	}
