import { UserTransform } from '../../../../shared/types/db/index.types'
import {
	RequestResult,
	AuthorizeResultResponseType,
} from '../../types/operations/server'
import { getUser } from '../api'
import { sessions } from '../sessions'

export const authorize = async (
	authLogin: string,
	authPassword: string
): Promise<RequestResult<AuthorizeResultResponseType>> => {
	const user: UserTransform | null = await getUser(authLogin)

	if (!user) {
		return {
			error: 'This is user not found :(',
			res: null,
		}
	}

	const { id, login, password, roleId } = user

	if (authPassword !== password) {
		return {
			error: 'This is password not found :(',
			res: null,
		}
	}

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(user),
		},
	}
}
