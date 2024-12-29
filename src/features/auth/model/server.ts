import { fetchUsers } from '../../../entities/users/model/operations/fetch-users'
import { authorize } from './operations/authorize'
import { fetchRoles } from './operations/fetch-roles'
import { logout } from './operations/logout'
import { register } from './operations/register'

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
}
