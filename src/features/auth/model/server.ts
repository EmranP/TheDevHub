import { InitUserStateType } from '../../../entities/user/types/user-init.interface'
import { User } from '../../../shared/types/db/user.interface'
import { AuthorizeResult, SessionRolesType } from '../types/server'
import { addUser } from './add-user'
import { getUser } from './get-user'
import { sessions } from './sessions'

export const server = {
	async logout(session: SessionRolesType) {
		sessions.remove(session)
	},

	async authorize(
		authLogin: string,
		authPassword: string
	): Promise<AuthorizeResult<InitUserStateType>> {
		const user: User | undefined = await getUser(authLogin)
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
				roleId: role_id,
				session: sessions.create(user),
			},
		}
	},
	async register(
		regLogin: string,
		regPassword: string
	): Promise<AuthorizeResult<SessionRolesType>> {
		const userReg: User | undefined = await getUser(regLogin)

		if (userReg) {
			return {
				error: 'This is user already busy :(',
				res: null,
			}
		}

		await addUser(regLogin, regPassword)

		return {
			error: null,
			res: {
				id: userReg.id,
				login: userReg.login,
				roleId: userReg.role_id,
				session: sessions.create(user),
			},
		}
	},
}
