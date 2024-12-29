import { API_SERVER_ROLES } from '../../../../app/constant/api'
import { Roles } from '../../../../shared/types/db/roles.interface'

export const getRoles = async (): Promise<Roles[] | undefined> => {
	try {
		const response: Response = await fetch(API_SERVER_ROLES)
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}
		const data: Promise<Roles[]> = response.json()

		return data
	} catch (error) {
		console.error(error as Error)
	}
}
