import { Dispatch, SetStateAction } from 'react'
import { Roles } from '../../../../shared/types/db/roles.interface'
import { User } from '../../../../shared/types/db/user.interface'
import { ServerOperation } from '../../../../shared/types/hooks/useServerRequest.type'

export interface IApiResAccess<T> {
	error: string | null
	res: T | null
}

export type TRequestServerHandler = (
	operation: ServerOperation,
	...params: any[]
) => Promise<IApiResAccess<any[]>>
export type TSetErrorMessageHandler = Dispatch<SetStateAction<string | null>>
export type TSetUsersHandler = Dispatch<SetStateAction<User[] | null>>
export type TSetRolesHandler = Dispatch<SetStateAction<Roles[] | null>>
