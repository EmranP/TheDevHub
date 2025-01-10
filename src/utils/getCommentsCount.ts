import { ICommentPostData } from '../shared/types/db/index.types'

export const getCommentsCount = (
	comments: ICommentPostData[] = [],
	postId: number | string
): number | string => {
	const postComments = comments.filter(
		({ postId: commentPostId }) => commentPostId === postId
	)

	return postComments.length
}
