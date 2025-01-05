import { ROLE } from '../../../../../app/constant/role'
import { sessions } from '../../../../auth/model/sessions'
import { deleteComment, getComments } from '../../../comment/index.export'
import { deletePost } from '../api/delete-post'

export const removePost = async (hash, id) => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	await deletePost(id)

	const comments = await getComments(id)

	await Promise.all(
		comments.map(({ id: commentId }) => deleteComment(commentId))
	)

	return {
		error: null,
		res: true,
	}
}
