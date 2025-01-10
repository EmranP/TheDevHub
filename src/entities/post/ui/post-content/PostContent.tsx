import { SquarePen } from 'lucide-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SpecialPanel } from '../../../../features/post/ui/SpecialPanel'
import { IPostData } from '../../../../shared/types/db/posts.interface'
import { Title } from '../../../../shared/ui'
import { IComponentPostFormProps } from '../../types/ui/post-ui.interface'

const PostContentContainer: FC<IComponentPostFormProps> = ({
	className,
	post,
}) => {
	const { id, title, imageUrl, content, publishedAt } = post as IPostData
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<Title title={title} />
			<SpecialPanel id={id} publishedAt={publishedAt} margin='-20px 0 20px'>
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
