import { Calendar, SquarePen, Trash } from 'lucide-react'
import { FC } from 'react'
import styled from 'styled-components'
import { Title } from '../../../../shared/ui'

const PostContentContainer: FC = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<Title title={title} />
			<div className='special-panel'>
				<div className='published-at'>
					<Calendar size={22} />
					{publishedAt}
				</div>
				<div className='buttons'>
					<Trash size={22} cursor={'pointer'} />
					<SquarePen size={22} cursor={'pointer'} />
				</div>
			</div>
			<div className='post-text'>{content}</div>
		</div>
	)
}

export const PostContent = styled(PostContentContainer)`
	margin-bottom: 40px;

	& img {
		float: left;
		margin: 0 20px 10px 0px;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}

	& .published-at {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	& .buttons {
		display: flex;
		gap: 10px;
	}

	& .post-text {
		font-size: 18px;
	}
`
