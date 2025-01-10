import { Send } from 'lucide-react'
import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'
import { ROLE } from '../../../../app/constant/role'
import {
	addCommentAsync,
	CLOSE_MODAL,
	openModal,
	removeCommentAsync,
} from '../../../../features/post/comment/index.export'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/store'
import { useServerRequest } from '../../../../shared/hooks/useServerRequest'
import { IComponentCommentsProps } from '../../types/ui/post-ui.interface'
import { Comment } from './Comment'

const CommentsContainer: FC<IComponentCommentsProps> = ({
	className,
	comments,
	postId,
}) => {
	const [newComment, setNewComment] = useState('')
	const { id, roleId } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const requestServer = useServerRequest()

	const changeCommentHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setNewComment(e.target.value)

	const newCommentAddHandler = (
		userId: string | number,
		postId: string | number,
		content: string
	) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content))
		setNewComment('')
	}

	const removeCommentHandler = (
		postId: string | number,
		id: number | string
	) => {
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

	const isGuest = roleId === ROLE.GUEST
	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(
		roleId as number
	)

	return (
		<div className={className}>
			{!isGuest && (
				<div className='new-comment'>
					<textarea
						value={newComment}
						name='comment'
						placeholder='Комментарий...'
						onChange={changeCommentHandler}
					/>
					<Send
						onClick={() => newCommentAddHandler(id, postId, newComment)}
						cursor={'pointer'}
						className='icon-send'
					/>
				</div>
			)}
			<div className='comments'>
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						key={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
						isAdminOrModerator={isAdminOrModerator}
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
