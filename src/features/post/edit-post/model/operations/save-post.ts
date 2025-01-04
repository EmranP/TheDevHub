import { ROLE } from '../../../../../app/constant/role'
import { sessions } from '../../../../auth/model/sessions'
import { updatePost } from '../api/updatePost'

export const savePost = async (hash: string | number, newPostData) => {
	const accessRoles = [ROLE.ADMIN]

	const access = await sessions.access(hash, accessRoles)

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	const updatedPost = await updatePost(newPostData)

	return {
		error: null,
		res: updatedPost,
	}
}
