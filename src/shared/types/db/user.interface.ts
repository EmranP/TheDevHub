export interface User {
	id: number | string
	login: string
	password: string
	registered_at: string
	role_id: number
}

export interface UserTransform extends Omit<User, 'registered_at' | 'role_id'> {
	registeredAt: string
	roleId: number
}
