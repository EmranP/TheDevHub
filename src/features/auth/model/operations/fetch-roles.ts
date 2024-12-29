import { ROLE } from '../../../../app/constant/role'
import { Roles } from '../../../../shared/types/db/index.types'
import { AuthorizeResult } from '../../types/operations/server'
import { getRoles } from '../api'
import { sessions } from '../sessions'

export const fetchRoles = async (
	userSession: string | number
): Promise<AuthorizeResult<Roles[] | undefined>> => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	const roles: Roles[] | undefined = await getRoles()

	return {
		error: null,
		res: roles,
	}
}
