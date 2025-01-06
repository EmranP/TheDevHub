import { API_SERVER_COMMENTS } from '../../../../../app/constant/api'
import { transformComments } from '../../../../../shared/transformers'
import {
	ICommentPostData,
	InitCommentPostInterface,
} from '../../../../../shared/types/db/posts.interface'

export const getComments = async (
	postId: number | string
): Promise<ICommentPostData[]> => {
	try {
		const response: Response = await fetch(
			`${API_SERVER_COMMENTS}?post_id=${postId}`
		)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data: InitCommentPostInterface[] = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Комментарий не найден или данные некорректны.')
		}

		return data.map(transformComments)
	} catch (error) {
		console.error(error as Error)
		return []
	}
}
