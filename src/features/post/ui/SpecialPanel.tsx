import { Calendar, Trash } from 'lucide-react'
import { FC } from 'react'
import styled from 'styled-components'

const SpecialPanelContainer: FC = ({ className, publishedAt, children }) => {
	return (
		<div className={className}>
			<div className='published-at'>
				<Calendar size={22} />
				{publishedAt}
			</div>
			<div className='buttons'>
				{children}
				<Trash size={22} cursor={'pointer'} />
			</div>
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
