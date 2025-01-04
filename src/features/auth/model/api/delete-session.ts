import { API_SERVER_SESSION } from '../../../../app/constant/api'

export const deleteSession = async (
	sessionId: string | number
): Promise<Response | void> =>
	fetch(`${API_SERVER_SESSION}/${sessionId}`, {
		method: 'DELETE',
	})
