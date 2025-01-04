import { ROLE } from '../../../../../app/constant/role'
import { getPost } from '../../../../../entities/post/model/current-post/api/get-post'
import { sessions } from '../../../../auth/model/sessions'
import { createComment, getComments } from '../../index.export'

export const addComment = async (
	hash: number | string,
	userId: number | string,
	postId: number | string,
	content: string
) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	await createComment(userId, postId, content)

	const post = await getPost(postId)

	const comments = await getComments(postId)

	return {
		error: null,
		res: { ...post, comments },
	}
}
