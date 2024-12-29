import { User, UserTransform } from '../types/db/user.interface'

export const transformUser = (dbUser: User): UserTransform => ({
	id: dbUser.id,
	login: dbUser.login,
	password: dbUser.password,
	registeredAt: dbUser.registered_at,
	roleId: dbUser.role_id,
})
