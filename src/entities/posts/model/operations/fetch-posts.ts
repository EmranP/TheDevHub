import { RequestResult } from '../../../../features/auth/types/operations/server'
import { getComments } from '../../../../features/post/comment/index.export'
import { IPostsDataHomePage } from '../../../../shared/types/db/posts.interface'
import { getCommentsCount } from '../../../../utils'
import { getPosts } from '../api/get-posts'

export const fetchPosts = async (
	postId: string | number
): Promise<RequestResult<IPostsDataHomePage[] | null | undefined>> => {
	const [posts, comments] = await Promise.all([getPosts(), getComments(postId)])

	return {
		error: null,
		res: posts?.map(post => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	}
}
