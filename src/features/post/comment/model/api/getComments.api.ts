import { API_SERVER_COMMENTS } from '../../../../../app/constant/api'
import { transformComments } from '../../../../../shared/transformers'

export const getComments = async (postId: number | string) => {
	try {
		const response: Response = await fetch(
			`${API_SERVER_COMMENTS}?post_id=${postId}`
		)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Комментарий не найден или данные некорректны.')
		}

		return data.map(transformComments)
	} catch (error) {
		console.error(error as Error)
		return []
	}
}
