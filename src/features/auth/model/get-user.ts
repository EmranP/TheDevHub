import { API_SERVER_USER } from '../../../app/constant/api'
import { User } from '../../../shared/types/db/user.interface'

export const getUser = async (loginToFind: string): Promise<User | null> => {
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

		return data[0]
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Ошибка: ${error.message}`)
		} else {
			console.error('Произошла неизвестная ошибка.')
		}

		return null
	}
}
