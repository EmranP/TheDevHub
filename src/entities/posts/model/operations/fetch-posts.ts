import { RequestResult } from '../../../../features/auth/types/operations/server'
import { getComments } from '../../../../features/post/comment/index.export'
import {
	IApiGetPostData,
	IApiGetPostsData,
	ICommentPostData,
	IPostsDataWithCommentCount,
} from '../../../../shared/types/db/posts.interface'
import { getCommentsCount } from '../../../../utils'
import { getPosts } from '../api/get-posts'

export const fetchPosts = async (
	searchPhrase: string,
	postId: string | number,
	page: string | number,
	limit: string | number
): Promise<RequestResult<IApiGetPostsData | null | undefined>> => {
	const [postsResult, comments]: [
		IApiGetPostData | null,
		ICommentPostData[] | null
	] = await Promise.all([
		getPosts(searchPhrase, page, limit),
		getComments(postId),
	])

	if (!postsResult || !postsResult.posts) {
		return {
			error: 'Ошибка при получении постов',
			res: null,
		}
	}

	const postsWithCommentsCount: IPostsDataWithCommentCount[] =
		postsResult.posts.map(post => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		}))

	return {
		error: null,
		res: {
			posts: postsWithCommentsCount,
			links: postsResult.links || '',
		},
	}
}
