import { IPostData, IPostDataResponseServer } from '../types/db/posts.interface'

export const transformPost = (dbPost: IPostDataResponseServer): IPostData => ({
	imageUrl: dbPost.image_url,
	publishedAt: dbPost.published_at,
	id: dbPost.id,
	title: dbPost.title,
	content: dbPost.content,
	comments: dbPost.comments,
})
