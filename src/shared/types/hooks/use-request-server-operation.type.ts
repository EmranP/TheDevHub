import { IApiFetchPost } from '../../../entities/post/types/operations/fetch-post.type'
import {
	AuthorizeResultResponseType,
	RequestResult,
} from '../../../features/auth/types/operations/server'
import { IPostData, Roles, UserTransform } from '../db/index.types'

// Auth
export type RequestServerAuthorizeType = Promise<
	RequestResult<AuthorizeResultResponseType>
>
export type RequestServerLogoutType = Promise<void>
export type RequestServerRegisterType = Promise<
	RequestResult<AuthorizeResultResponseType>
>

// Users & Roles
export type RequestServerFetchUsersType = Promise<
	RequestResult<UserTransform[] | undefined>
>
export type RequestServerFetchRolesType = Promise<
	RequestResult<Roles[] | undefined>
>
export type RequestServerUpdateUserRoleType = Promise<RequestResult<boolean>>
export type RequestServerRemoveUserType = Promise<RequestResult<boolean>>

// Post
export type RequestServerFetchPostType = Promise<
	RequestResult<IApiFetchPost | null>
>
export type RequestServerAddCommentType =
	Promise<RequestResult<IPostData | null> | null>
export type RequestServerRemoveCommentType = Promise<
	RequestResult<IPostData | null>
>
export type RequestServerSavePostType = Promise<RequestResult<IPostData | null>>
export type RequestServerRemovePostType = Promise<RequestResult<boolean>>
