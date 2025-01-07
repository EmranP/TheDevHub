import { API_SERVER_POST } from '../../../../app/constant/api'
import { transformPost } from '../../../../shared/transformers'
import {
	IPostData,
	IPostDataResponseServer,
} from '../../../../shared/types/db/posts.interface'

export const getPosts = async (): Promise<IPostData[] | undefined> => {
	try {
		const response: Response = await fetch(API_SERVER_POST)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data: IPostDataResponseServer[] = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Пользователь не найден или данные некорректны.')
		}

		return data.map(transformPost)
	} catch (error) {
		console.error(error as Error)
	}
}
