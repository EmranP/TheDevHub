import { User } from '../../../shared/types/db/user.interface'
import { getUsers } from './get-users'

export const getUser = async (loginToFind: string) => {
	const users: User[] = await getUsers()

	return users.find(({ login }) => login === loginToFind)
}
