import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { PostCard } from '../../entities/posts/index.export'
import { useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { IPostsDataHomePage } from '../../shared/types/db/posts.interface'
import { ComponentPropsType } from '../../shared/types/ui'

const ContainerHomePage: FC<ComponentPropsType> = ({ className }) => {
	const post = useAppSelector(state => state.post)
	const [posts, setPosts] = useState<IPostsDataHomePage[]>([])
	const requestServer = useServerRequest()

	useEffect(() => {
		const fetchPostsAsync = async (): Promise<void> => {
			try {
				const posts = await requestServer('fetchPosts', post.id)
				if (posts?.error) {
					return
				}

				setPosts(posts?.res)
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message)
				} else {
					console.log('Error home page post fetch :(')
				}
			}
		}

		fetchPostsAsync()
	}, [post.id, requestServer])

	return (
		<div className={className}>
			<div className='post-list'>
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export const HomePage = styled(ContainerHomePage)`
	& .post-list {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		grid-template-rows: auto;
		place-items: center;
		padding: 20px;
	}
`
