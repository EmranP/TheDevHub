import { Params } from 'react-router-dom'
import { Dispatch } from 'redux'
import { ActionRoot } from '../../../../../shared/types/store/action-root'
import { TRequestServerHandler } from '../../../../users/types/api/fetch-users-method.interface'
import { setPostData } from './set-post-data'

export const loadPostAsync =
	(requestServer: TRequestServerHandler, postId: Readonly<Params<string>>) =>
	(dispatch: Dispatch<ActionRoot>) => {
		requestServer('fetchPost', postId).then(postData => {
			dispatch(setPostData(postData.res))
		})
	}
