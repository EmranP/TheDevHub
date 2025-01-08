import { API_SERVER_POST } from '../../../../app/constant/api'
import { transformPost } from '../../../../shared/transformers'
import {
	IApiGetPostData,
	IPostDataResponseServer,
} from '../../../../shared/types/db/posts.interface'

export const getPosts = async (
	page: string | number,
	limit: string | number
): Promise<IApiGetPostData | null> => {
	try {
		const response: Response = await fetch(
			`${API_SERVER_POST}?_page=${page}&_limit=${limit}`
		)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data: [IPostDataResponseServer[], string | null] = await Promise.all([
			response.json(),
			response.headers.get('Link'),
		])
		const [loadedPosts, links] = data

		if (!Array.isArray(loadedPosts) || loadedPosts.length === 0) {
			throw new Error('Пользователь не найден или данные некорректны.')
		}

		return {
			posts: loadedPosts.map(transformPost),
			links: links || '',
		}
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		} else {
			console.log('Error Fetch-posts (')
		}
		return null
	}
}
