import { API_SERVER_USER } from '../../../../app/constant/api'

export const setUserRole = (
	userId: string | number,
	roleId: number
): Promise<Response> =>
	fetch(`${API_SERVER_USER}/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			role_id: roleId,
		}),
	})
