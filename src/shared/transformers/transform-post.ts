import { IPostData, IPostTransform } from '../types/db/posts.interface'

export const transformPost = (dbPost: IPostData): IPostTransform => ({
	imageUrl: dbPost.image_url,
	publishedAt: dbPost.published_at,
	id: dbPost.id,
	title: dbPost.title,
	content: dbPost.content,
	comments: dbPost.comments,
})
