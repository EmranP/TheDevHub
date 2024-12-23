import { User } from '../../../shared/types/db/user.interface'
import { AuthorizeResult, AuthorizeResultResponseType } from '../types/server'
import { addUser } from './add-user'
import { getUser } from './get-user'
import { sessions } from './sessions'

export const server = {
	async logout(session: string) {
		sessions.remove(session)
	},

	async authorize(
		authLogin: string,
		authPassword: string
	): Promise<AuthorizeResult<AuthorizeResultResponseType>> {
		const user: User | null = await getUser(authLogin)
		console.log(user?.role_id)

		if (!user) {
			return {
				error: 'This is user not found :(',
				res: null,
			}
		}

		if (authPassword !== user.password) {
			return {
				error: 'This is password not found :(',
				res: null,
			}
		}

		const { id, login, role_id } = user

		return {
			error: null,
			res: {
				id: id,
				login: login,
				role_id: role_id,
				session: sessions.create(user),
			},
		}
	},
	async register(
		regLogin: string,
		regPassword: string
	): Promise<AuthorizeResult<AuthorizeResultResponseType>> {
		const existedUser: User | null = await getUser(regLogin)

		if (existedUser) {
			return {
				error: 'This is user already busy :(',
				res: null,
			}
		}

		const userReg: User = await addUser(regLogin, regPassword)

		return {
			error: null,
			res: {
				id: userReg.id,
				login: userReg.login,
				role_id: userReg.role_id,
				session: sessions.create(userReg),
			},
		}
	},
}
