import { Roles } from '../../../../shared/types/db/roles.interface'
import { User } from '../../../../shared/types/db/user.interface'
import {
	IApiResAccess,
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
			IApiResAccess<User[]>,
			IApiResAccess<Roles[]>
		] = await Promise.all([
			requestServer('fetchUsers'),
			requestServer('fetchRoles'),
		])

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
