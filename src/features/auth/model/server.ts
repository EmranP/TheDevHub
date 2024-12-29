import {
	fetchUsers,
	removeUser,
	updateUserRole,
} from '../../../entities/users/model/operations'
import { ServerType } from '../../../shared/types/operation/server.type'
import { authorize, fetchRoles, logout, register } from './operations'

export const server: ServerType = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser,
}
