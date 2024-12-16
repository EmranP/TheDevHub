import { API_SERVER_USER } from '../../../app/constant/api'
import { generateData } from '../../../utils/generateData'

export const addUser = (login: string, password: string) =>
	fetch(API_SERVER_USER, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: generateData(),
			role_id: 2,
		}),
	})
