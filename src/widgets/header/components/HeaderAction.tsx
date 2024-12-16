import { FileText, /*LogOut*/ StepBack, Users } from 'lucide-react'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderActionStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
const BlockSignIn = styled.div`
	margin-top: 30px;
`

const ButtonSignIn = styled(Link)`
	padding: 10px 40px;
	font-size: 20px;
	color: #fff;
	background-color: #808080;
	transition: border-radius 0.3s ease 0s;

	&:hover {
		border-radius: 10px;
	}
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
	const prevNavigate = useNavigate()

	const movePrevPageHandler = () => prevNavigate(-1)
	return (
		<HeaderActionStyle>
			{/* <HeaderActionAuthStyle>
				<HeaderActionAuthSpanStyle>Emran</HeaderActionAuthSpanStyle>
				<LogOut width={28} height={26} cursor={'pointer'} />
			</HeaderActionAuthStyle> */}
			<BlockSignIn>
				<ButtonSignIn to='login'>Войти</ButtonSignIn>
			</BlockSignIn>
			<HeaderActionAuthSettingStyle>
				<StepBack
					onClick={movePrevPageHandler}
					width={30}
					height={35}
					cursor={'pointer'}
				/>
				<Link to='post'>
					<FileText color='#1c1c1c' width={30} height={35} cursor={'pointer'} />
				</Link>
				<Link to='users'>
					<Users color='#1c1c1c' width={30} height={35} cursor={'pointer'} />
				</Link>
			</HeaderActionAuthSettingStyle>
		</HeaderActionStyle>
	)
}
