import { RequestResult } from '../../../../features/auth/types/operations/server'
import { Roles } from '../../../../shared/types/db/roles.interface'
import { UserTransform } from '../../../../shared/types/db/user.interface'
import {
	TRequestServerHandler,
	TSetErrorMessageHandler,
	TSetRolesHandler,
	TSetUsersHandler,
} from '../../types/api/fetch-users-method.interface'

export const fetchUsersMethod = async (
	requestServer: TRequestServerHandler,
	setErrorMessage: TSetErrorMessageHandler,
	setUsers: TSetUsersHandler,
	setRoles: TSetRolesHandler
): Promise<void> => {
	try {
		const [usersRes, rolesRes]: [
			RequestResult<UserTransform[]>,
			RequestResult<Roles[]>
		] = (await Promise.all([
			requestServer('fetchUsers', null),
			requestServer('fetchRoles', null),
		])) as [RequestResult<UserTransform[]>, RequestResult<Roles[]>]

		if (usersRes.error || rolesRes.error) {
			setErrorMessage(usersRes.error || rolesRes.error)
			return
		}

		setUsers(usersRes.res)
		setRoles(rolesRes.res)
	} catch (error) {
		setErrorMessage((error as Error).message)
	}
}
