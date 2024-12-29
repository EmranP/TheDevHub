import { ROLE } from '../../../../app/constant/role'
import { sessions } from '../../../../features/auth/model/sessions'
import { AuthorizeResult } from '../../../../features/auth/types/operations/server'
import { UserTransform } from '../../../../shared/types/db/index.types'
import { getUsers } from '../api/get-users'

export const fetchUsers = async (
	userSession: string | number
): Promise<AuthorizeResult<UserTransform[] | undefined>> => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	const users: UserTransform[] | undefined = await getUsers()

	return {
		error: null,
		res: users,
	}
}
