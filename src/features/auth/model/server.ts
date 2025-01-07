import { fetchPost } from '../../../entities/post/model/current-post/operations/fetch-post'
import { fetchPosts } from '../../../entities/posts/index.export'
import {
	fetchUsers,
	removeUser,
	updateUserRole,
} from '../../../entities/users/model/operations'
import { ServerType } from '../../../shared/types/operation/server.type'
import { addComment, removeComment } from '../../post/comment/index.export'
import { savePost, removePost } from '../../post/edit-post/index.export'
import { authorize, fetchRoles, logout, register } from './operations'

export const server: ServerType = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
	fetchPost,
	addComment,
	removeComment,
	savePost,
	removePost,
	fetchPosts,
}
