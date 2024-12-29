import { UserTransform } from '../db/user.interface'
import {
	RequestServerAuthorizeType,
	RequestServerFetchRolesType,
	RequestServerFetchUsersType,
	RequestServerLogoutType,
	RequestServerRegisterType,
	RequestServerRemoveUserType,
	RequestServerUpdateUserRoleType,
} from './use-request-server-operation.type'

export type ServerOperation =
	| 'logout'
	| 'fetchUsers'
	| 'fetchRoles'
	| 'register'
	| 'authorize'
	| 'updateUserRole'
	| 'removeUser'

export type RequestServerType =
	| RequestServerAuthorizeType
	| RequestServerLogoutType
	| RequestServerRegisterType
	| RequestServerFetchUsersType
	| RequestServerFetchRolesType
	| RequestServerUpdateUserRoleType
	| RequestServerRemoveUserType

export type ServerRequestParams =
	| [string | number]
	| [UserTransform]
	| [null]
	| [string, ...(string | number | null)[]]
