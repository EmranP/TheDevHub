import { ROLE } from '../../../../app/constant/role'
import { sessions } from '../../../../features/auth/model/sessions'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { deleteUser } from '../api/delete-user'

export const removeUser = async (
	hash: string | number,
	userId: string
): Promise<RequestResult<boolean>> => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
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
