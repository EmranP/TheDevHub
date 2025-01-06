import { API_SERVER_POST } from '../../../../../app/constant/api'
import { transformPost } from '../../../../../shared/transformers'

import {
	IPostData,
	IPostDataResponseServer,
} from '../../../../../shared/types/db/posts.interface'

export const getPost = async (
	postId: string | number
): Promise<IPostData | null> => {
	try {
		const response = await fetch(`${API_SERVER_POST}/${postId}`)

		if (!response.ok) {
			throw new Error(
				`Ошибка запроса: ${response.status} ${response.statusText}`
			)
		}

		const data: IPostDataResponseServer = await response.json()

		return transformPost(data)
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Ошибка: ${error.message}`)
		} else {
			console.error('Произошла неизвестная ошибка.')
		}
		return null
	}
}
