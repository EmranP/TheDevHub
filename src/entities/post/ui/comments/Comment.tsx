import { Calendar, CircleUserRound, Trash } from 'lucide-react'
import { FC } from 'react'
import styled from 'styled-components'

const CommentContainer: FC = ({
	className,
	author,
	content,
	publishedAt,
	onRemoveComment,
}) => {
	return (
		<div className={className}>
			<div className='comment-wrapper'>
				<div className='info-panel'>
					<div className='author'>
						<CircleUserRound size={22} />
						<span>{author}</span>
					</div>
					<div className='published-at'>
						<Calendar size={22} />
						<span>{publishedAt}</span>
					</div>
				</div>
				<div className='comment-text'>{content}</div>
			</div>

			<Trash
				onClick={onRemoveComment}
				size={22}
				cursor={'pointer'}
				className='icon-trash'
			/>
		</div>
	)
}

export const Comment = styled(CommentContainer)`
	display: flex;
	gap: 10px;
	margin-bottom: 20px;

	& .comment-wrapper {
		flex: 1 1 auto;
		padding: 10px;
		border: 1px solid #000;
		border-radius: 10px;
	}

	& .icon-trash {
		margin-top: 5px;
	}

	& .info-panel {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;

		.author,
		.published-at {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}

	& .comment-text {
	}
`
