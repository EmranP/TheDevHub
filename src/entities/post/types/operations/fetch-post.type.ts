import {
	ICommentPostData,
	IPostData,
} from '../../../../shared/types/db/posts.interface'

export interface ICommentWithAuthor extends ICommentPostData {
	author: string | undefined
}

export interface IApiFetchPost extends IPostData {
	comments: ICommentWithAuthor[]
}
