import { API_SERVER_POST } from '../../../../../app/constant/api'

export const deletePost = (id) => fetch(`${API_SERVER_POST}/${id}`, {
	method: 'DELETE'
})