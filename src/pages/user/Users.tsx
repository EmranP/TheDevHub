import { FC, useEffect, useState } from 'react'
import { fetchUsersMethod } from '../../entities/users/model/api/fetch-users-method'
import { TableRow } from '../../entities/users/ui/table-row'
import { UserRow } from '../../entities/users/ui/user-row'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { Roles } from '../../shared/types/db/roles.interface'
import { UserTransform } from '../../shared/types/db/user.interface'
import { Container } from '../../shared/ui/Container'
import { Title } from '../../shared/ui/Title'
import { Content } from '../../widgets/content/components/Content'

export const Users: FC = () => {
	const [users, setUsers] = useState<UserTransform[] | null>([])
	const [roles, setRoles] = useState<Roles[] | null>([])
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const requestServer = useServerRequest()

	useEffect(() => {
		fetchUsersMethod(requestServer, setErrorMessage, setUsers, setRoles)
	}, [requestServer])

	return (
		<Container>
			<Content error={errorMessage}>
				<Title title='Пользователи' />
				<div className='table'>
					<TableRow>
						<div className='login-column'>Логин</div>
						<div className='registered-column'>Дата регистрация</div>
						<div className='role-column'>Роль</div>
					</TableRow>
					{users?.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
						/>
					))}
				</div>
			</Content>
		</Container>
	)
}
