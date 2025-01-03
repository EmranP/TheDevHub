import { API_SERVER_SESSION } from '../../../../app/constant/api'
import { UserTransform } from '../../../../shared/types/db/user.interface'

export const addSession = (hash: string, user: UserTransform) =>
	fetch(API_SERVER_SESSION, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			hash,
			user,
		}),
	})
