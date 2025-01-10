import { API_SERVER_SESSION } from '../../../../app/constant/api'
import { transformSession } from '../../../../shared/transformers'
import { IApiGetSession } from '../../types/api/get-session.type'

export const getSession = async (
	hash: string | number
): Promise<IApiGetSession | null> => {
	try {
		const response = await fetch(`${API_SERVER_SESSION}?hash=${hash}`)

		if (!response.ok) {
			throw new Error(
				`Ошибка запроса: ${response.status} ${response.statusText}`
			)
		}

		const data: IApiGetSession[] = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Пользователь не найден или данные некорректны.')
		}

		const [loadedSession] = data

		return transformSession(loadedSession)
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Ошибка: ${error.message}`)
		} else {
			console.error('Произошла неизвестная ошибка.')
		}

		return null
	}
}
