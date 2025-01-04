import { setPostData } from '../../../../../entities/post/model/current-post/actions/set-post-data'
import { TRequestServerHandler } from '../../../../../entities/users/types/api/fetch-users-method.interface'

export const savePostAsync =
	(requestServer: TRequestServerHandler, savePostData) => dispatch =>
		requestServer('savePost', savePostData).then(updatedPost => {
			dispatch(setPostData(updatedPost.res))
		})
