import { sessions } from '../sessions'

export const logout = async (userSession: string): Promise<void> =>
	sessions.remove(userSession)
