import { User } from '../../../shared/types/db/user.interface'
import { AuthorizeResult } from '../types/server'
import { addUser } from './add-user'
import { createSession } from './create-session'
import { getUser } from './get-user'

export const server = {
	async authorize(
		authLogin: string,
		authPassword: string
	): Promise<AuthorizeResult> {
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
				res: createSession(user.role_id),
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
	): Promise<AuthorizeResult> {
		try {
			const userReg = await getUser(regLogin)

			if (userReg) {
				return {
					error: 'This is user already busy :(',
					res: null,
				}
			}

			await addUser(regLogin, regPassword)

			return {
				error: null,
				res: createSession(userReg.role_id),
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
