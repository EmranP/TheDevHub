import { Save, Trash2 } from 'lucide-react'
import { FC } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../shared/hooks/store'
import { UserRowProps } from '../types/ui/user-row.interface'
import { TableRow } from './table-row'

const UserContainerRow: FC<UserRowProps> = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
}) => {
	const dispatch = useAppDispatch()

	const onRoleChange = () => {}
	return (
		<div className={className}>
			<TableRow>
				<div className='login-column'>{login}</div>
				<div className='registered-column'>{registeredAt}</div>
				<div className='role-column'>
					<select value={userRoleId} onChange={onRoleChange}>
						{roles?.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
					<Save />
				</div>
			</TableRow>
			<div className='user-remove'>
				<Trash2
					onClick={() => {
						/* User Remove */
					}}
				/>
			</div>
		</div>
	)
}

export const UserRow = styled(UserContainerRow)``
