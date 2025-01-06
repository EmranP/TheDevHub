import { ROLE } from '../../../../../app/constant/role'
import { IPostData } from '../../../../../shared/types/db/posts.interface'
import { sessions } from '../../../../auth/model/sessions'
import { RequestResult } from '../../../../auth/types/operations/server'
import { createPost } from '../../../create-post/index.export'
import { updatePost } from '../api/update-post'

export const savePost = async (
	hash: string | number,
	newPostData: IPostData
): Promise<RequestResult<IPostData | null>> => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	const savedPost =
		newPostData.id === ''
			? await createPost(newPostData)
			: await updatePost(newPostData)

	return {
		error: null,
		res: savedPost,
	}
}
