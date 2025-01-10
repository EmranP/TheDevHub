import { Calendar, Trash } from 'lucide-react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ROLE } from '../../../app/constant/role'
import { IComponentSpecialPanelProps } from '../../../entities/post/types/ui/post-ui.interface'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/store'
import { useServerRequest } from '../../../shared/hooks/useServerRequest'
import { checkAccess } from '../../../utils'
import { CLOSE_MODAL, openModal } from '../comment/index.export'
import { removePostAsync } from '../edit-post/index.export'

const SpecialPanelContainer: FC<IComponentSpecialPanelProps> = ({
	className,
	id,
	publishedAt,
	children,
}) => {
	const userRole = useAppSelector(state => state.user.roleId)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const requestServer = useServerRequest()

	const postRemoveHandler = (id: number | string) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			})
		)
	}

	const isAdmin = checkAccess([ROLE.ADMIN], userRole)

	return (
		<div className={className}>
			<div className='published-at'>
				{publishedAt && <Calendar size={22} />}
				{publishedAt}
			</div>
			{isAdmin && (
				<div className='buttons'>
					{children}
					{publishedAt && (
						<Trash
							size={22}
							cursor={'pointer'}
							onClick={() => postRemoveHandler(id)}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	font-size: 18px;

	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& .buttons {
		display: flex;
		gap: 10px;
	}
`
