/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { PAGINATION_LIMIT } from '../../app/constant/pagination-limit'
import { Pagination, PostCard, Search } from '../../entities/posts/index.export'
import { useAppSelector } from '../../shared/hooks/store'
import { useServerRequest } from '../../shared/hooks/useServerRequest'
import { IPostsDataWithCommentCount } from '../../shared/types/db/posts.interface'
import { ComponentPropsType } from '../../shared/types/ui'
import { debounce, getLastPageFromLinks } from '../../utils'

const ContainerHomePage: FC<ComponentPropsType> = ({ className }) => {
	const [posts, setPosts] = useState<IPostsDataWithCommentCount[]>([])
	const post = useAppSelector(state => state.post)
	const [page, setPage] = useState<number>(1)
	const [lastPage, setLastPage] = useState<number>(1)
	const [shouldSearch, setShouldSearch] = useState<boolean>(false)
	const [searchPhrase, setSearchPhrase] = useState('')
	const requestServer = useServerRequest()

	useEffect(() => {
		const fetchPostsAsync = async (): Promise<void> => {
			try {
				const responsePost = await requestServer(
					'fetchPosts',
					searchPhrase,
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
	}, [page, shouldSearch, requestServer])

	const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 1500), [])

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchPhrase(e.target.value)
		startDelayedSearch(!shouldSearch)
	}

	const postsFiltered = useMemo(() => {
		const lowercasedSearchPhrase = searchPhrase.toLowerCase()

		return posts.filter(post =>
			post.title.toLowerCase().includes(lowercasedSearchPhrase)
		)
	}, [searchPhrase, posts])

	return (
		<div className={className}>
			<Search searchPhrase={searchPhrase} onSearch={onSearch} />
			{posts.length > 0 ? (
				<div className='post-list'>
					{postsFiltered.map(
						({ id, title, publishedAt, commentsCount, imageUrl }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								publishedAt={publishedAt}
								commentsCount={commentsCount}
								imageUrl={imageUrl}
							/>
						)
					)}
				</div>
			) : (
				<div className='no-posts-found'>Статьи не найдены</div>
			)}
			{lastPage > 1 && posts.length > 0 && (
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

	& .no-posts-found {
		font-size: 24px;
		font-weight: 500;
		margin-top: 40px;
		text-align: center;
	}
`
