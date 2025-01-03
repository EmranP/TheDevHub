export interface IPostData {
	id: number | string
	title: string
	image_url: string
	content: string
	published_at: string
	comments: []
}

export interface IPostTransform
	extends Omit<IPostData, 'image_url' | 'published_at'> {
	imageUrl: string
	publishedAt: string
}
