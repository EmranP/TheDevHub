import { UserTransform } from '../../../../shared/types/db/user.interface'

export interface IApiGetSession {
	hash: string | null
	id: number
	user: UserTransform
}
