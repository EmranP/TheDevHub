import { FileText, LogOut, StepBack, Users } from 'lucide-react'
import { FC } from 'react'
import styled from 'styled-components'

const HeaderActionStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
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
	return (
		<HeaderActionStyle>
			<HeaderActionAuthStyle>
				<HeaderActionAuthSpanStyle>Emran</HeaderActionAuthSpanStyle>
				<LogOut width={28} height={26} cursor={'pointer'} />
			</HeaderActionAuthStyle>
			<HeaderActionAuthSettingStyle>
				<StepBack width={30} height={35} cursor={'pointer'} />
				<FileText width={30} height={35} cursor={'pointer'} />
				<Users width={30} height={35} cursor={'pointer'} />
			</HeaderActionAuthSettingStyle>
		</HeaderActionStyle>
	)
}
