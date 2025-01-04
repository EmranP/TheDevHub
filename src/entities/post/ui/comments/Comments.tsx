import { Send } from 'lucide-react'
import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'
import {
	addCommentAsync,
	CLOSE_MODAL,
	openModal,
	removeCommentAsync,
} from '../../../../features/post/comment/index.export'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/store'
import { useServerRequest } from '../../../../shared/hooks/useServerRequest'
import { ComponentPropsType } from '../../../../shared/types/ui'
import { Comment } from './Comment'

const CommentsContainer: FC<ComponentPropsType> = ({
	className,
	comments,
	postId,
}) => {
	const [newComment, setNewComment] = useState('')
	const userId = useAppSelector(state => state.user.id)
	const dispatch = useAppDispatch()
	const requestServer = useServerRequest()

	const changeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setNewComment(e.target.value)

	const newCommentAddHandler = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content))
		setNewComment('')
	}

	const removeCommentHandler = (postId, id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			})
		)
	}

	return (
		<div className={className}>
			<div className='new-comment'>
				<textarea
					value={newComment}
					name='comment'
					placeholder='Комментарий...'
					onChange={changeCommentHandler}
				/>
				<Send
					onClick={() => newCommentAddHandler(userId, postId, newComment)}
					cursor={'pointer'}
					className='icon-send'
				/>
			</div>
			<div className='comments'>
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
						onRemoveComment={() => removeCommentHandler(postId, id)}
					/>
				))}
			</div>
		</div>
	)
}

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		gap: 10px;
		margin-bottom: 30px;

		& textarea {
			flex: 1 1 auto;
			padding: 10px;
			height: 120px;
			font-size: 18px;
			border-radius: 10px;

			// Reset style
			resize: none;
			outline: none;
		}

		& .icon-send {
			margin-top: 10px;
		}
	}
`
