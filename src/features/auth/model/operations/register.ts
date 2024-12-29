import { UserTransform } from '../../../../shared/types/db/index.types'
import {
	RequestResult,
	AuthorizeResultResponseType,
} from '../../types/operations/server'
import { addUser, getUser } from '../api'
import { sessions } from '../sessions'

export const register = async (
	regLogin: string,
	regPassword: string
): Promise<RequestResult<AuthorizeResultResponseType>> => {
	const existedUser: UserTransform | null = await getUser(regLogin)

	if (existedUser) {
		return {
			error: 'This is user already busy :(',
			res: null,
		}
	}

	const userReg: UserTransform = await addUser(regLogin, regPassword)

	const { id, login, roleId } = userReg

	return {
		error: null,
		res: {
			id,
			login,
			roleId,
			session: sessions.create(userReg),
		},
	}
}
