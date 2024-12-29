import { UserTransform } from '../../../shared/types/db/user.interface'
import { AuthorizationSessionResponseProps } from '../types/operations/server'

export const sessions: AuthorizationSessionResponseProps = {
	list: {},
	create(user) {
		const hash: string = Math.random().toFixed(50)

		this.list[hash] = user

		return hash
	},
	remove(hash) {
		if (this.list[hash]) {
			delete this.list[hash]
		} else {
			console.warn(`Сеанс с хешем «${hash}» не найден.`)
		}
	},
	access(hash, accessRoles) {
		const user: UserTransform = this.list[hash]

		return !!user && accessRoles.includes(user.roleId)
	},
}
