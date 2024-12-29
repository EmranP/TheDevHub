import { API_SERVER_USER } from '../../../../app/constant/api'
import { transformUser } from '../../../../shared/transformers'
import { User, UserTransform } from '../../../../shared/types/db/index.types'

export const getUser = async (
	loginToFind: string
): Promise<UserTransform | null> => {
	try {
		const response = await fetch(`${API_SERVER_USER}?login=${loginToFind}`)

		if (!response.ok) {
			throw new Error(
				`Ошибка запроса: ${response.status} ${response.statusText}`
			)
		}

		const data: User[] = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Пользователь не найден или данные некорректны.')
		}

		const [loadedUser] = data

		return transformUser(loadedUser)
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Ошибка: ${error.message}`)
		} else {
			console.error('Произошла неизвестная ошибка.')
		}

		return null
	}
}
