import { API_SERVER_POST } from '../../../../../app/constant/api'
import { ERROR } from '../../../../../app/constant/error'
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
			const error =
				response.status === 404
					? ERROR.PAGE_NOT_EXIST
					: 'Что-то пошло не так. Попробуйте ещё раз позднее'
			throw new Error(error)
		}

		const data: IPostDataResponseServer = await response.json()

		return data ? transformPost(data) : null
	} catch (error) {
		if (error instanceof Error) {
			return Promise.reject(error)
		} else {
			console.error('Произошла неизвестная ошибка в get-post.')
		}
		return null
	}
}
