import { ROLE } from '../../../../app/constant/role'
import { sessions } from '../../../../features/auth/model/sessions'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { deleteUser } from '../api/delete-user'

export const removeUser = async (
	userSession: string | number,
	userId: string
): Promise<RequestResult<boolean>> => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	deleteUser(userId)

	return {
		error: null,
		res: true,
	}
}
