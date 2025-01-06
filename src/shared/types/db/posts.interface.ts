export interface ICommentPostData {
	authorId: string
	postId: string
	publishedAt: string
	content: string
	id: number | string
}

export interface InitCommentPostInterface
	extends Omit<ICommentPostData, 'authorId' | 'postId' | 'publishedAt'> {
	author_id: string
	post_id: string
	published_at: string
}

export interface IPostData {
	id: number | string
	title: string
	imageUrl: string
	content: string
	publishedAt: string
	comments: ICommentPostData[]
}

export interface IPostDataResponseServer
	extends Omit<IPostData, 'imageUrl' | 'publishedAt'> {
	image_url: string
	published_at: string
}

export interface IPostDataSave {
	id?: string | number
	imageUrl?: string
	title?: string
	content?: string
}
