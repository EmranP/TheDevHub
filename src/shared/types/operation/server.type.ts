import {
	AuthorizeResultResponseType,
	RequestResult,
} from '../../../features/auth/types/operations/server'
import { IPostTransform } from '../db/posts.interface'
import { Roles } from '../db/roles.interface'
import { UserTransform } from '../db/user.interface'

export interface ServerType {
	authorize: (
		authLogin: string,
		authPassword: string
	) => Promise<RequestResult<AuthorizeResultResponseType>>
	logout: (userSession: string) => Promise<void>
	register: (
		regLogin: string,
		regPassword: string
	) => Promise<RequestResult<AuthorizeResultResponseType>>
	fetchUsers: (
		userSession: string | number
	) => Promise<RequestResult<UserTransform[] | undefined>>
	fetchRoles: (
		userSession: string | number
	) => Promise<RequestResult<Roles[] | undefined>>
	updateUserRole: (
		userSession: string | number,
		userId: string,
		newUserRoleId: number
	) => Promise<RequestResult<boolean>>
	removeUser: (
		userSession: string | number,
		userId: string
	) => Promise<RequestResult<boolean>>
	fetchPost: (
		postId: string | number
	) => Promise<RequestResult<IPostTransform | null>>
}
