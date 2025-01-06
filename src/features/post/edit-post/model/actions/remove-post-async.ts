import { TRequestServerHandler } from '../../../../../entities/users/types/api/fetch-users-method.interface'

export const removePostAsync =
	(requestServer: TRequestServerHandler, id: string | number) => () =>
		requestServer('removePost', id)
