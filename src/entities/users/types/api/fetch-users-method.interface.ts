import { Dispatch, SetStateAction } from 'react'
import { Roles } from '../../../../shared/types/db/roles.interface'
import { UserTransform } from '../../../../shared/types/db/user.interface'
import {
	RequestServerType,
	ServerOperation,
	ServerRequestParams,
} from '../../../../shared/types/hooks/useServerRequest.type'

export type TRequestServerHandler = (
	operation: ServerOperation,
	...params: ServerRequestParams
) => RequestServerType

export type TSetErrorMessageHandler = Dispatch<SetStateAction<string | null>>
export type TSetUsersHandler = Dispatch<SetStateAction<UserTransform[] | null>>
export type TSetRolesHandler = Dispatch<SetStateAction<Roles[] | null>>
