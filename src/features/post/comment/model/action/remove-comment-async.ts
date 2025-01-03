import { setPostData } from '../../../../../entities/post/model/current-post/actions/set-post-data'
import { TRequestServerHandler } from '../../../../../entities/users/types/api/fetch-users-method.interface'

export const removeCommentAsync =
	(requestServer: TRequestServerHandler, postId, id) => dispatch => {
		requestServer('removeComment', postId, id).then(postData => {
			dispatch(setPostData(postData.res))
		})
	}
