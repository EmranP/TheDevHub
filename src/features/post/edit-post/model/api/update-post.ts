import { API_SERVER_POST } from '../../../../../app/constant/api'
import { IPostData } from '../../../../../shared/types/db/posts.interface'

export const updatePost = async ({
	id,
	imageUrl,
	title,
	content,
}: IPostData): Promise<IPostData> =>
	fetch(`${API_SERVER_POST}/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then(loadedPost => loadedPost.json())
