import {
	AuthorizeResultResponseType,
	RequestResult,
} from '../../../features/auth/types/operations/server'
import { Roles, UserTransform } from '../db/index.types'

export type RequestServerAuthorizeType = Promise<
	RequestResult<AuthorizeResultResponseType>
>
export type RequestServerLogoutType = Promise<void>
export type RequestServerRegisterType = Promise<
	RequestResult<AuthorizeResultResponseType>
>
export type RequestServerFetchUsersType = Promise<
	RequestResult<UserTransform[] | undefined>
>
export type RequestServerFetchRolesType = Promise<
	RequestResult<Roles[] | undefined>
>
export type RequestServerUpdateUserRoleType = Promise<RequestResult<boolean>>
export type RequestServerRemoveUserType = Promise<RequestResult<boolean>>
