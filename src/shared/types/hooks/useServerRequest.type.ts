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
	| 'fetchPost'
	| 'addComment'
	| 'removeComment'

export type RequestServerType =
	| RequestServerAuthorizeType
	| RequestServerLogoutType
	| RequestServerRegisterType
	| RequestServerFetchUsersType
	| RequestServerFetchRolesType
	| RequestServerUpdateUserRoleType
	| RequestServerRemoveUserType

export type ServerRequestParams = [...Array<string | number | null>]
