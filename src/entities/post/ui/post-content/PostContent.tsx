import { SquarePen } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SpecialPanel } from '../../../../features/post/ui/SpecialPanel'
import { Title } from '../../../../shared/ui'

const PostContentContainer: FC = ({
	className,
	post: { title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<Title title={title} />
			<SpecialPanel publishedAt={publishedAt} margin='-20px 0 20px'>
				<Link to={'edit'}>
					<SquarePen size={22} cursor={'pointer'} />
				</Link>
			</SpecialPanel>
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

	& .post-text {
		font-size: 18px;
		white-space: pre-line;
	}
`
