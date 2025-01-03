import { setPostData } from '../../../../../entities/post/model/current-post/actions/set-post-data'
import { TRequestServerHandler } from '../../../../../entities/users/types/api/fetch-users-method.interface'

export const addCommentAsync =
	(requestServer: TRequestServerHandler, userId, postId, content) =>
	dispatch => {
		requestServer('addComment', userId, postId, content).then(postData => {
			dispatch(setPostData(postData.res))
		})
	}
