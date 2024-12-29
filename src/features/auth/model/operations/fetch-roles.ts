import { ROLE } from '../../../../app/constant/role'
import { Roles } from '../../../../shared/types/db/index.types'
import { RequestResult } from '../../types/operations/server'
import { getRoles } from '../api'
import { sessions } from '../sessions'

export const fetchRoles = async (
	userSession: string | number
): Promise<RequestResult<Roles[] | undefined>> => {
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
