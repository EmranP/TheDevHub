import { API_SERVER_USER } from '../../../../app/constant/api'
import { generateDate } from '../../../../utils'

export const addUser = (login: string, password: string) =>
	fetch(API_SERVER_USER, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registered_at: generateDate(),
			role_id: 2,
		}),
	}).then(createUser => createUser.json())
