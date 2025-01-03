import { API_SERVER_COMMENTS } from '../../../../../app/constant/api'

export const deleteComment = async (
	commentId: string | number
): Promise<Response | void> =>
	fetch(`${API_SERVER_COMMENTS}/${commentId}`, {
		method: 'DELETE',
	})
