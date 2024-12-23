import { User } from '../../../shared/types/db/user.interface'
import { AuthorizationSessionResponseProps } from '../types/server'

export const sessions: AuthorizationSessionResponseProps = {
	list: {},
	create(user: User): string {
		const hash: string = Math.random().toFixed(50)

		this.list[hash] = user
		return hash
	},
	remove(hash: string): void {
		if (this.list[hash]) {
			delete this.list[hash]
		} else {
			console.warn(`Сеанс с хешем «${hash}» не найден.`)
		}
	},
}
