import { FC, useEffect, useLayoutEffect, useState } from 'react'
import { useMatch, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ROLE } from '../../app/constant/role'
import { loadPostAsync } from '../../entities/post/model/current-post/actions/load-post-async'
import { ICommentWithAuthor } from '../../entities/post/types/operations/fetch-post.type'
import { Comments, PostContent } from '../../entities/post/ui'
import { RESET_POST_DATA } from '../../features/post/edit-post/index.export'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { ComponentPropsType } from '../../shared/types/ui'
import { PrivateContent } from '../../widgets/content/components/PrivateContent'
import { ErrorUI } from '../404/ErrorPage'
import { PostForm } from './PostForm'

const PostContainer: FC<ComponentPropsType> = ({ className }) => {
	const [error, setError] = useState<string | null | undefined>(null)
	const dispatch = useAppDispatch()
	const params = useParams()
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const isCreating = !!useMatch('/post')
	const isEditing = !!useMatch('/post/:id/edit')
	const requestServer = useServerRequest()
	const post = useAppSelector(state => state.post)

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA)
	}, [dispatch, isCreating])

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false)
			return
		}

		dispatch(loadPostAsync(requestServer, params.id)).then(postData => {
			setError(postData?.error)
			setIsLoading(false)
		})
	}, [dispatch, params.id, requestServer, isCreating])

	if (isLoading) {
		return null
	}

	const SpecificPostPage: JSX.Element =
		isCreating || isEditing ? (
			<PrivateContent access={[ROLE.ADMIN]} serverError={error}>
				<div className={className}>
					<PostForm post={post} />
				</div>
			</PrivateContent>
		) : (
			<div className={className}>
				<PostContent post={post} />
				<Comments
					comments={post.comments as ICommentWithAuthor[]}
					postId={post.id}
				/>
			</div>
		)

	return <>{error ? <ErrorUI error={error} /> : SpecificPostPage}</>
}

export const Post = styled(PostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`
