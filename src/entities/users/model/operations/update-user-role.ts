import { ROLE } from '../../../../app/constant/role'
import { sessions } from '../../../../features/auth/model/sessions'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { setUserRole } from '../api/set-user-role'

export const updateUserRole = async (
	userSession: string | number,
	userId: string,
	newUserRoleId: number
): Promise<RequestResult<boolean>> => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	setUserRole(userId, newUserRoleId)

	return {
		error: null,
		res: true,
	}
}
