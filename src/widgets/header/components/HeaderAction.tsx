import { FileText, LogOut, StepBack, Users } from 'lucide-react'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ROLE } from '../../../app/constant/role'
import { logout } from '../../../entities/users/model/action/user-action'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/store'
import { Button } from '../../../shared/ui/Button'
import { checkAccess } from '../../../utils'

const HeaderActionStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const ButtonSignIn = styled(Link)`
	padding: 10px 40px;
	font-size: 20px;
`

const HeaderActionAuthStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

const HeaderActionAuthSpanStyle = styled.span`
	font-weight: 700;
	font-size: 25px;
	letter-spacing: -0.03em;
	color: #1c1c1c;
`

const HeaderActionAuthSettingStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
`

export const HeaderAction: FC = () => {
	const { roleId, id, login, session } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const movePrevPageHandler = () => navigate(-1)

	const logoutHandler = () => {
		const isUserReady = confirm('Вы увереный что хотить выйти ? :(')

		if (isUserReady) {
			sessionStorage.removeItem('userData')
			dispatch(logout(session))
			navigate('/')
		}

		return
	}

	const isAdmin = checkAccess([ROLE.ADMIN], roleId)

	return (
		<HeaderActionStyle>
			{roleId === ROLE.GUEST ? (
				<Button style={{ marginTop: 10 }}>
					<ButtonSignIn to='login'>Войти</ButtonSignIn>
				</Button>
			) : (
				<HeaderActionAuthStyle>
					<HeaderActionAuthSpanStyle>{id && login}</HeaderActionAuthSpanStyle>
					<LogOut
						width={28}
						height={26}
						cursor={'pointer'}
						onClick={logoutHandler}
					/>
				</HeaderActionAuthStyle>
			)}
			<HeaderActionAuthSettingStyle>
				<StepBack
					onClick={movePrevPageHandler}
					width={30}
					height={35}
					cursor={'pointer'}
				/>
				{isAdmin && (
					<>
						<Link to='post'>
							<FileText
								color='#1c1c1c'
								width={30}
								height={35}
								cursor={'pointer'}
							/>
						</Link>
						<Link to='users'>
							<Users
								color='#1c1c1c'
								width={30}
								height={35}
								cursor={'pointer'}
							/>
						</Link>
					</>
				)}
			</HeaderActionAuthSettingStyle>
		</HeaderActionStyle>
	)
}
