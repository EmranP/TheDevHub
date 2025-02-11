import { Dispatch } from 'redux'
import { setPostData } from '../../../../../entities/post/model/current-post/actions/set-post-data'
import {
	IPostDataSave,
} from '../../../../../shared/types/db/posts.interface'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { request } from '../../../../../utils/request.util'
import { API_URL_POST } from '../../../../../app/constant/api'

export const savePostAsync =
	(id:string, newPostData: IPostDataSave) =>
	async (
		dispatch: Dispatch<ActionRoot>
	) => {
		const saveRequest = id ?
		request(`${API_URL_POST}/${id}`, "PATCH", newPostData) :
		request(API_URL_POST, "POST", newPostData)

		return saveRequest.then(updatedPost => {
			console.log(updatedPost)
			if (updatedPost && updatedPost.data) {
				dispatch(setPostData(updatedPost.data))
			} else {
				console.error('Failed to fetch post data:', updatedPost?.error)
			}
			return updatedPost
		})

	}
