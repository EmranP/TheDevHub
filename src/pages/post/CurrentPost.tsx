import { FC, useEffect } from 'react'
import { Params, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { loadPostAsync } from '../../entities/post/model/current-post/actions/load-post-async'
import { Comments, PostContent } from '../../entities/post/ui'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { ComponentPropsType } from '../../shared/types/ui'

const CurrentPostContainer: FC<ComponentPropsType> = ({ className }) => {
	const post = useAppSelector(state => state.post)
	const dispatch = useAppDispatch()
	const params: Readonly<Params<string>> = useParams()
	const requestServer = useServerRequest()

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id))
	}, [dispatch, params.id, requestServer])
	return (
		<div className={className}>
			<PostContent post={post} />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	)
}

export const CurrentPost = styled(CurrentPostContainer)`
	margin: 40px 0;
	padding: 0 80px;
`
