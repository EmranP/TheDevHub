import { AuthorizationSessionResponseProps } from '../types/operations/server'
import { addSession, deleteSession, getSession } from './api'

export const sessions: AuthorizationSessionResponseProps = {
	create(user) {
		const hash: string = Math.random().toFixed(50)

		addSession(hash, user)

		return hash
	},
	async remove(hash) {
		const session = await getSession(hash)

		if (!session) {
			console.warn(`Сеанс с хешем «${hash}» не найден.`)
			return
		}

		deleteSession(session.id)
	},
	async access(hash, accessRoles) {
		const dbSession = await getSession(hash)

		return !!dbSession?.user && accessRoles.includes(dbSession.user.roleId)
	},
}
