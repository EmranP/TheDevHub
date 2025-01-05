import { FC, useEffect, useLayoutEffect } from 'react'
import { Params, useMatch, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { loadPostAsync } from '../../entities/post/model/current-post/actions/load-post-async'
import { Comments, PostContent } from '../../entities/post/ui'
import { RESET_POST_DATA } from '../../features/post/edit-post/index.export'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { ComponentPropsType } from '../../shared/types/ui'
import { PostForm } from './PostForm'

const PostContainer: FC<ComponentPropsType> = ({ className }) => {
	const dispatch = useAppDispatch()
	const params: Readonly<Params<string>> = useParams()
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
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	)
}

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`
