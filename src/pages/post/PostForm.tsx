import { Save } from 'lucide-react'
import { FC, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { savePostAsync } from '../../features/post/edit-post/index.export'
import { SpecialPanel } from '../../features/post/ui/SpecialPanel'
import { useAppDispatch } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { Input } from '../../shared/ui'
import { sanitizeContent } from '../../utils'

const PostFormContainer: FC = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const requestServer = useServerRequest()

	const imageRef = useRef(null)
	const titleRef = useRef(null)
	const contentRef = useRef(null)

	const saveHandler = () => {
		const newImage = imageRef.current.value
		const newTitle = titleRef.current.value
		const newContent = sanitizeContent(contentRef.current.innerHTML)

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: newImage,
				title: newTitle,
				content: newContent,
			})
		).then(() => navigate(`/post/${id}`))
	}

	return (
		<div className={className}>
			<Input
				ref={imageRef}
				defaultValue={imageUrl}
				placeholder='Изображение...'
				style={{ padding: '15px 0 15px 5px' }}
			/>
			<Input
				ref={titleRef}
				defaultValue={title}
				placeholder='Заголовок...'
				style={{ padding: '15px 0 15px 5px' }}
			/>
			<SpecialPanel publishedAt={publishedAt} margin='20px 0'>
				<Save size={22} cursor={'pointer'} onClick={saveHandler} />
			</SpecialPanel>
			<div
				ref={contentRef}
				className='post-text'
				contentEditable={true}
				suppressContentEditableWarning={true}
			>
				{content}
			</div>
		</div>
	)
}

export const PostForm = styled(PostFormContainer)`
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
