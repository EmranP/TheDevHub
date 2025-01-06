import { ROLE } from '../../../../../app/constant/role'
import { getPost } from '../../../../../entities/post/model/current-post/api/get-post'
import { IPostData } from '../../../../../shared/types/db/posts.interface'
import { sessions } from '../../../../auth/model/sessions'
import { RequestResult } from '../../../../auth/types/operations/server'
import { createComment, getComments } from '../../index.export'

export const addComment = async (
	hash: number | string,
	userId: number | string,
	postId: number | string,
	content: string
): Promise<RequestResult<IPostData | null> | null> => {
	try {
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

		const comments = await getComments(postId)

		return {
			error: null,
			res: { ...post, comments },
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		} else {
			console.log('Error add-comment operations :(')
		}
		return null
	}
}
