import { FC, useEffect, useLayoutEffect } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { loadPostAsync } from '../../entities/post/model/current-post/actions/load-post-async'
import { ICommentWithAuthor } from '../../entities/post/types/operations/fetch-post.type'
import { Comments, PostContent } from '../../entities/post/ui'
import { RESET_POST_DATA } from '../../features/post/edit-post/index.export'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { ComponentPropsType } from '../../shared/types/ui'
import { PostForm } from './PostForm'

const PostContainer: FC<ComponentPropsType> = ({ className }) => {
	const dispatch = useAppDispatch()
	const params = useParams()
	const isCreating = useMatch('/post')
	const isEditing = useMatch('/post/:id/edit')
	const requestServer = useServerRequest()
	const post = useAppSelector(state => state.post)

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch, isCreating])

	useEffect(() => {
		if (isCreating) {
			return
		}

		dispatch(loadPostAsync(requestServer, params.id))
	}, [dispatch, params.id, requestServer, isCreating])

	return (
		<div className={className}>
			{isCreating || isEditing ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments
						comments={post.comments as ICommentWithAuthor[]}
						postId={post.id}
					/>
				</>
			)}
		</div>
	)
}

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`
