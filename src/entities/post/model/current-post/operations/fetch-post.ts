import { RequestResult } from '../../../../../features/auth/types/operations/server'
import { getComments } from '../../../../../features/post/comment/index.export'
import { IPostTransform } from '../../../../../shared/types/db/posts.interface'
import { getUsers } from '../../../../users/model/api/get-users'
import { getPost } from '../api/get-post'

export const fetchPost = async (
	postId: string | number
): Promise<RequestResult<IPostTransform | null>> => {
	const post: IPostTransform | null = await getPost(postId)

	const comments = await getComments(postId)

	const users = await getUsers()

	const commentWithAuthor = comments.map(comment => {
		const user = users?.find(({ id }) => id === comment.authorId)

		return {
			...comment,
			author: user?.login,
		}
	})

	return {
		error: null,
		res: { ...post, comments: commentWithAuthor },
	}
}
