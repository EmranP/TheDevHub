import { Save, Trash2 } from 'lucide-react'
import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'
import { useServerRequest } from '../../../shared/hooks/useServerRequest'
import { UserRowProps } from '../types/ui/user-row.interface'
import { TableRow } from './table-row'

const UserContainerRow: FC<UserRowProps> = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	userRemoveHandler,
}) => {
	const [initialRoleId, setInitialRoleId] = useState<number | string>(
		userRoleId
	)
	const [selectedRoleId, setSelectedRoleId] = useState<number | string>(
		userRoleId
	)

	const requestServer = useServerRequest()

	const onRoleChange = (e: ChangeEvent<HTMLSelectElement>) =>
		setSelectedRoleId(Number(e.target.value))

	const saveRoleHandler = (
		userId: number | null,
		newUserRoleId: string | number
	) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId)
		})
	}

	const isSave: boolean = selectedRoleId === initialRoleId

	return (
		<div className={className}>
			<TableRow>
				<div className='login-column'>{login}</div>
				<div className='registered-column'>{registeredAt}</div>
				<div className='role-column'>
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles?.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Save
						aria-disabled={isSave}
						color={isSave ? '#cccc' : '#000'}
						cursor={isSave ? 'base' : 'pointer'}
						onClick={() => saveRoleHandler(id, selectedRoleId)}
					/>
				</div>
			</TableRow>
			<div className='user-remove'>
				<Trash2 onClick={userRemoveHandler} cursor={'pointer'} />
			</div>
		</div>
	)
}

export const UserRow = styled(UserContainerRow)`
	display: grid;
	grid-template-columns: 1fr 0px;
	grid-template-rows: auto;
	border: 1px solid #000;
	gap: 15px;
`
