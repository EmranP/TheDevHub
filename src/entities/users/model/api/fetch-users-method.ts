import { API_URL_ROLES, API_URL_USERS } from '../../../../app/constant/api'
import { RequestResult } from '../../../../features/auth/types/operations/server'
import { Roles } from '../../../../shared/types/db/roles.interface'
import { UserTransform } from '../../../../shared/types/db/user.interface'
import { request } from '../../../../utils/request.util'
import {
	TSetErrorMessageHandler,
	TSetRolesHandler,
	TSetUsersHandler,
} from '../../types/api/fetch-users-method.interface'

export const fetchUsersMethod = async (
	setErrorMessage: TSetErrorMessageHandler,
	setUsers: TSetUsersHandler,
	setRoles: TSetRolesHandler
): Promise<void> => {
	try {
		const [usersRes, rolesRes]: [
			RequestResult<UserTransform[]>,
			RequestResult<Roles[]>
		] = (await Promise.all([
			request(API_URL_USERS),
			request(API_URL_ROLES),
		])) as [RequestResult<UserTransform[]>, RequestResult<Roles[]>]

		if (usersRes.error || rolesRes.error) {
			setErrorMessage(usersRes.error || rolesRes.error)
			return
		}

		setUsers(usersRes.data)
		setRoles(rolesRes.dataRoles)
	} catch (error) {
		setErrorMessage((error as Error).message)
	}
}
