import { RequestResult } from '../../../../../features/auth/types/operations/server'
import { getComments } from '../../../../../features/post/comment/index.export'
import {
	ICommentPostData,
	IPostData,
} from '../../../../../shared/types/db/posts.interface'
import { getUsers } from '../../../../users/model/api/get-users'
import {
	IApiFetchPost,
	ICommentWithAuthor,
} from '../../../types/operations/fetch-post.type'
import { getPost } from '../api/get-post'

export const fetchPost = async (
	postId: string | number
): Promise<RequestResult<IApiFetchPost | null>> => {
	const post: IPostData | null = await getPost(postId)

	if (!post) {
		return {
			error: 'Post not found',
			res: null,
		}
	}

	const comments = await getComments(postId)
	const users = await getUsers()

	const commentWithAuthor = comments.map(
		(comment: ICommentPostData): ICommentWithAuthor => {
			const user = users?.find(({ id }) => id === comment.authorId)

			return {
				...comment,
				author: user?.login,
			}
		}
	)

	const result: IApiFetchPost = {
		...post,
		comments: commentWithAuthor,
	}

	return {
		error: null,
		res: result,
	}
}
