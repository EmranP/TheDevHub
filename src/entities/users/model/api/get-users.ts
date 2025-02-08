// import { API_SERVER_USER } from '../../../../app/constant/api'
import { transformUser } from '../../../../shared/transformers'
import { User, UserTransform } from '../../../../shared/types/db/user.interface'

export const getUsers = async (): Promise<UserTransform[] | undefined> => {
	try {
		const response: Response = await fetch('')
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const data: User[] = await response.json()

		if (!Array.isArray(data) || data.length === 0) {
			throw new Error('Пользователь не найден или данные некорректны.')
		}

		return data.map(transformUser)
	} catch (error) {
		console.error(error as Error)
	}
}
