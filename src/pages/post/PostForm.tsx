import { Save } from 'lucide-react'
import { ChangeEvent, FC, useLayoutEffect, useRef, useState } from 'react'
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
	const [imageUrlValue, setImageUrlValue] = useState<string>(imageUrl)
	const [titleValue, setTitleValue] = useState<string>(title)
	const contentRef = useRef(null)

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl)
		setTitleValue(title)
	}, [imageUrl, title])

	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const requestServer = useServerRequest()

	const saveHandler = () => {
		const newContent = sanitizeContent(contentRef.current.innerHTML)

		dispatch(
			savePostAsync(requestServer, {
				id,
				imageUrl: imageUrlValue,
				title: titleValue,
				content: newContent,
			})
		).then(({ id }) => navigate(`/post/${id}`))
	}

	const imageChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setImageUrlValue(e.target.value)
	const titleChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>
		setTitleValue(e.target.value)

	return (
		<div className={className}>
			<Input
				placeholder='Изображение...'
				style={{ padding: '15px 0 15px 5px', marginBottom: '20px' }}
				value={imageUrlValue}
				onChange={imageChangeInputHandler}
			/>
			<Input
				placeholder='Заголовок...'
				style={{ padding: '15px 0 15px 5px' }}
				value={titleValue}
				onChange={titleChangeInputHandler}
			/>
			<SpecialPanel id={id} publishedAt={publishedAt} margin='20px 0'>
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
		min-height: 80px;
		border: 1px solid #000;
		padding: 10px;
		font-size: 18px;
		white-space: pre-line;
	}
`
