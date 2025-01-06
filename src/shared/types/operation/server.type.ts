import { IApiFetchPost } from '../../../entities/post/types/operations/fetch-post.type'
import {
	AuthorizeResultResponseType,
	RequestResult,
} from '../../../features/auth/types/operations/server'
import { IPostData } from '../db/posts.interface'
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
	) => Promise<RequestResult<IApiFetchPost | null>>
	addComment: (
		hash: number | string,
		userId: number | string,
		postId: number | string,
		content: string
	) => Promise<RequestResult<IPostData | null> | null>
	removeComment: (
		hash: string,
		postId: string | number,
		id: number | string
	) => Promise<RequestResult<IPostData | null>>
	savePost: (
		hash: string | number,
		newPostData: IPostData
	) => Promise<RequestResult<IPostData | null>>
	removePost: (
		hash: string,
		id: number | string
	) => Promise<RequestResult<boolean>>
}
