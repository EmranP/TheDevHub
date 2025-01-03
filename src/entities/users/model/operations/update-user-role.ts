import { ROLE } from '../../../../app/constant/role'
import { sessions } from '../../../../features/auth/model/sessions'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { setUserRole } from '../api/set-user-role'

export const updateUserRole = async (
	hash: string | number,
	userId: string,
	newUserRoleId: number
): Promise<RequestResult<boolean>> => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
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
