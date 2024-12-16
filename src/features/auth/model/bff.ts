import { ROLE } from '../../../app/constant/role'
import { User } from '../../../shared/types/db/user.interface'
import { AuthorizeResult, SessionRolesType } from '../types/server'
import { addUser } from './add-user'
import { createSession } from './create-session'
import { getUser } from './get-user'

export const server = {
	async authorize(
		authLogin: string,
		authPassword: string
	): Promise<AuthorizeResult<SessionRolesType>> {
		try {
			const user: User | undefined = await getUser(authLogin)

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

			return {
				error: null,
				res: createSession(ROLE.ADMIN),
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.error('An unknown error occurred')
			}

			return {
				error: 'An error occurred during authorization',
				res: null,
			}
		}
	},
	async register(
		regLogin: string,
		regPassword: string
	): Promise<AuthorizeResult<SessionRolesType>> {
		try {
			const userReg: User | undefined = await getUser(regLogin)

			await addUser(regLogin, regPassword)
			console.log(userReg)

			if (userReg) {
				return {
					error: 'This is user already busy :(',
					res: null,
				}
			}

			return {
				error: null,
				res: createSession(ROLE.READER),
			}
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			} else {
				console.error('An unknown error occurred')
			}

			return {
				error: 'An error occurred during authorization',
				res: null,
			}
		}
	},
}
