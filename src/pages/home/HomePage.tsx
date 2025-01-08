import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { PAGINATION_LIMIT } from '../../app/constant/pagination-limit'
import { Pagination, PostCard } from '../../entities/posts/index.export'
import { useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { IPostsDataWithCommentCount } from '../../shared/types/db/posts.interface'
import { ComponentPropsType } from '../../shared/types/ui'
import { getLastPageFromLinks } from '../../utils'

const ContainerHomePage: FC<ComponentPropsType> = ({ className }) => {
	const [posts, setPosts] = useState<IPostsDataWithCommentCount[]>([])
	const post = useAppSelector(state => state.post)
	const [page, setPage] = useState<number>(1)
	const [lastPage, setLastPage] = useState<number>(1)
	const requestServer = useServerRequest()

	useEffect(() => {
		const fetchPostsAsync = async (): Promise<void> => {
			try {
				const responsePost = await requestServer(
					'fetchPosts',
					post.id,
					page,
					PAGINATION_LIMIT
				)

				if (responsePost?.error) {
					return
				}

				const { posts, links } = responsePost.res

				setPosts(posts)
				setLastPage(getLastPageFromLinks(links))
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message)
				} else {
					console.log('Error home page post fetch :(')
				}
			}
		}

		fetchPostsAsync()
	}, [page, post.id, requestServer])

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
			{lastPage > 1 && (
				<Pagination setPage={setPage} lastPage={lastPage} page={page} />
			)}
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
