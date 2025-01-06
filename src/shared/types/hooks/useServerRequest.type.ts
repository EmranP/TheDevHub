import { Params } from 'react-router-dom'
import { IPostData, IPostDataSave } from '../db/posts.interface'
import { UserTransform } from '../db/user.interface'
import {
	RequestServerAddCommentType,
	RequestServerAuthorizeType,
	RequestServerFetchPostType,
	RequestServerFetchRolesType,
	RequestServerFetchUsersType,
	RequestServerLogoutType,
	RequestServerRegisterType,
	RequestServerRemoveCommentType,
	RequestServerRemovePostType,
	RequestServerRemoveUserType,
	RequestServerSavePostType,
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
	| 'savePost'
	| 'removePost'

export type RequestServerType =
	| RequestServerAuthorizeType
	| RequestServerLogoutType
	| RequestServerRegisterType
	| RequestServerFetchUsersType
	| RequestServerFetchRolesType
	| RequestServerUpdateUserRoleType
	| RequestServerRemoveUserType
	| RequestServerFetchPostType
	| RequestServerAddCommentType
	| RequestServerRemoveCommentType
	| RequestServerSavePostType
	| RequestServerRemovePostType

export type ServerRequestParams = [
	...Array<
		| string
		| number
		| null
		| undefined
		| Readonly<Params<string>>
		| IPostData
		| UserTransform
		| IPostDataSave
	>
]
