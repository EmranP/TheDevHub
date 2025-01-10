import { RequestResult } from '../../../../../features/auth/types/operations/server'
import { IPostData } from '../../../../../shared/types/db/posts.interface'
import { getPostCommentsWithAuthor } from '../../../../../utils'
import { IApiFetchPost } from '../../../types/operations/fetch-post.type'
import { getPost } from '../api/get-post'

export const fetchPost = async (
	postId: string | number
): Promise<RequestResult<IApiFetchPost | null>> => {
	let post: IPostData | null = null
	let error: string | null | Error = null

	try {
		post = await getPost(postId)
	} catch (postError) {
		if (postError instanceof Error) {
			error = postError.message
		}
	}

	if (error) {
		return {
			error,
			res: null,
		}
	}

	const commentWithAuthor = await getPostCommentsWithAuthor(postId)

	const result = {
		...post,
		comments: commentWithAuthor,
	} as IApiFetchPost

	return {
		error: null,
		res: result,
	}
}
