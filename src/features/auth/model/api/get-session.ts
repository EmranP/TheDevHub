import { API_SERVER_SESSION } from '../../../../app/constant/api'
import { transformSession } from '../../../../shared/transformers'

export const getSession = async (hash: string | number) => {
	try {
		const response = await fetch(`${API_SERVER_SESSION}?hash=${hash}`)

		if (!response.ok) {
			throw new Error(
				`Ошибка запроса: ${response.status} ${response.statusText}`
			)
		}

		const data = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Пользователь не найден или данные некорректны.')
		}

		const [loadedSession] = data
		console.log(loadedSession)

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
