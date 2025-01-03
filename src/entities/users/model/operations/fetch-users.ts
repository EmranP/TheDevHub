import { ROLE } from '../../../../app/constant/role'
import { sessions } from '../../../../features/auth/model/sessions'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { UserTransform } from '../../../../shared/types/db/index.types'
import { getUsers } from '../api/get-users'

export const fetchUsers = async (
	hash: string | number
): Promise<RequestResult<UserTransform[] | undefined>> => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
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
