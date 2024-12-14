import { API_SERVER_USER } from '../../../app/constant/api'

export const getUsers = () =>
	fetch(API_SERVER_USER).then(loadedUser => {
		if (!loadedUser.ok) {
			throw new Error(`HTTP error! status: ${loadedUser.status}`)
		}

		return loadedUser.json()
	})
