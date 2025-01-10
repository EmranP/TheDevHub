import { ROLE } from '../../../../../app/constant/role'
import { getPost } from '../../../../../entities/post/model/current-post/api/get-post'
import { IPostData } from '../../../../../shared/types/db/posts.interface'
import { getPostCommentsWithAuthor } from '../../../../../utils'
import { sessions } from '../../../../auth/model/sessions'
import { RequestResult } from '../../../../auth/types/operations/server'
import { deleteComment } from '../../index.export'

export const removeComment = async (
	hash: string,
	postId: string | number,
	id: number | string
): Promise<RequestResult<IPostData | null>> => {
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

	if (
		!post ||
		!post.id ||
		!post.title ||
		!post.imageUrl ||
		!post.content ||
		!post.publishedAt
	) {
		throw new Error('Некорректные данные поста')
	}

	const commentsWithAuthor = await getPostCommentsWithAuthor(postId)

	return {
		error: null,
		res: { ...post, comments: commentsWithAuthor },
	}
}
