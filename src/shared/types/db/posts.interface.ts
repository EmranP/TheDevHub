export interface IPostData {
	id: number | string
	title: string
	imageUrl: string
	content: string
	publishedAt: string
	comments: []
}

export interface IPostTransform
	extends Omit<IPostData, 'image_url' | 'published_at'> {
	imageUrl: string
	publishedAt: string
}
