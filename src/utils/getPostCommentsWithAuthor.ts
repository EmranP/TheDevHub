import { ICommentWithAuthor } from '../entities/post/types/operations/fetch-post.type'
import { getUsers } from '../entities/users/model/api/get-users'
import { getComments } from '../features/post/comment/index.export'
import { ICommentPostData } from '../shared/types/db/posts.interface'

export const getPostCommentsWithAuthor = async (
	postId: number | string
): Promise<ICommentWithAuthor[]> => {
	const comments = await getComments(postId)
	const users = await getUsers()

	return comments.map((comment: ICommentPostData): ICommentWithAuthor => {
		const user = users?.find(({ id }) => id === comment.authorId)

		return {
			...comment,
			author: user?.login,
		}
	})
}
