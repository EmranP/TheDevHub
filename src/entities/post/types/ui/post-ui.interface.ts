import { ReactNode } from 'react'
import { IPostData } from '../../../../shared/types/db/posts.interface'
import { ComponentPropsType } from '../../../../shared/types/ui'
import { ICommentWithAuthor } from '../operations/fetch-post.type'

export interface IComponentCommentsProps extends ComponentPropsType {
	comments: ICommentWithAuthor[]
	postId: string | number
}

export interface IComponentCommentProps extends ComponentPropsType {
	author: string | undefined
	content: string
	publishedAt: string
	onRemoveComment: () => void
}

export interface IComponentPostFormProps extends ComponentPropsType {
	post?: IPostData
}

export interface IComponentSpecialPanelProps extends ComponentPropsType {
	id: number | string
	publishedAt: string | number
	children: ReactNode
	margin?: string
}
