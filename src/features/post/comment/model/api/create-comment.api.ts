import { API_SERVER_COMMENTS } from '../../../../../app/constant/api'
import { generateDate } from '../../../../../utils'

export const createComment = (
	userId: string | number,
	postId: string | number,
	content: string
) =>
	fetch(API_SERVER_COMMENTS, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			post_id: postId,
			published_at: generateDate(),
			content,
		}),
	})
