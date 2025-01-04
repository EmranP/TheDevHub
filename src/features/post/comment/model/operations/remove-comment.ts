import { ROLE } from '../../../../../app/constant/role'
import { getPost } from '../../../../../entities/post/model/current-post/api/get-post'
import { sessions } from '../../../../auth/model/sessions'
import { deleteComment, getComments } from '../../index.export'

export const removeComment = async (hash, postId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	await deleteComment(id)

	const post = await getPost(postId)

	const comments = await getComments(postId)

	return {
		error: null,
		res: { ...post, comments },
	}
}
