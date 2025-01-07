import { Calendar, MessageCircleCode } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IPostCardProps } from '../index.export'

const ContainerPostCard: FC<IPostCardProps> = ({
	className,
	id,
	title,
	publishedAt,
	commentsCount,
	imageUrl,
}) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className='posts-card-footer'>
					<h4>{title}</h4>
					<div className='post-card-info'>
						<div className='published-at'>
							<Calendar size={22} />
							<span>{publishedAt}</span>
						</div>
						<div className='comment-count'>
							<MessageCircleCode size={22} />
							<span>{commentsCount}</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export const PostCard = styled(ContainerPostCard)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;

	& img {
		display: block;
		width: 100%;
	}

	& .posts-card-footer {
		border-top: 1px solid #000;
	}

	& h4 {
		padding: 5px;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px;

		& .published-at,
		.comment-count {
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
`
