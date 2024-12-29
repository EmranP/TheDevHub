import { API_SERVER_USER } from '../../../../app/constant/api'

export const deleteUser = (userId: string | number): Promise<Response> =>
	fetch(`${API_SERVER_USER}/${userId}`, {
		method: 'DELETE',
	})
