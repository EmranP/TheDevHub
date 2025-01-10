import { FC, useEffect, useState } from 'react'
import { ROLE } from '../../app/constant/role'
import { fetchUsersMethod } from '../../entities/users/model/api/fetch-users-method'
import { TableRow } from '../../entities/users/ui/table-row'
import { UserRow } from '../../entities/users/ui/user-row'
import { useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { Roles } from '../../shared/types/db/roles.interface'
import { UserTransform } from '../../shared/types/db/user.interface'
import { Container } from '../../shared/ui/Container'
import { Title } from '../../shared/ui/Title'
import { checkAccess } from '../../utils'
import { PrivateContent } from '../../widgets/content/components/PrivateContent'

export const Users: FC = () => {
	const [users, setUsers] = useState<UserTransform[] | null>([])
	const [roles, setRoles] = useState<Roles[] | null>([])
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const [shouldUpdateUserList, setShouldUpdateUserList] =
		useState<boolean>(false)
	const userRole = useAppSelector(state => state.user.roleId)

	const requestServer = useServerRequest()

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return
		}

		fetchUsersMethod(requestServer, setErrorMessage, setUsers, setRoles)
	}, [requestServer, shouldUpdateUserList, userRole])

	const userRemoveHandler = (userId: number | string) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return
		}

		requestServer('removeUser', userId).then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList)
		})
	}

	return (
		<PrivateContent serverError={errorMessage} access={[ROLE.ADMIN]}>
			<Container>
				<Title textAlign={'center'} title='Пользователи' />
				<div className='table'>
					<TableRow>
						<div className='login-column'>Логин</div>
						<div className='registered-column'>Дата регистрация</div>
						<div className='role-column'>Роль</div>
					</TableRow>
					{users?.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles?.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
							userRemoveHandler={() => userRemoveHandler(id)}
						/>
					))}
				</div>
			</Container>
		</PrivateContent>
	)
}
