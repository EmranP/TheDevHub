import {
	ICommentPostData,
	InitCommentPostInterface,
} from '../types/db/posts.interface'

export const transformComments = (
	dbComments: InitCommentPostInterface
): ICommentPostData => ({
	id: dbComments.id,
	authorId: dbComments.author_id,
	postId: dbComments.post_id,
	content: dbComments.content,
	publishedAt: dbComments.published_at,
})
