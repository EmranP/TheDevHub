/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { PAGINATION_LIMIT } from '../../app/constant/pagination-limit'
import { Pagination, PostCard, Search } from '../../entities/posts/index.export'
import { IPostsDataWithCommentCount } from '../../shared/types/db/posts.interface'
import { ComponentPropsType } from '../../shared/types/ui'
import { debounce, getLastPageFromLinks } from '../../utils'
import { request } from '../../utils/request.util'
import { API_URL_POST } from '../../app/constant/api'

const ContainerHomePage: FC<ComponentPropsType> = ({ className }) => {
	const [posts, setPosts] = useState<IPostsDataWithCommentCount[]>([])
	const [page, setPage] = useState<number>(1)
	const [lastPage, setLastPage] = useState<number>(1)
	const [shouldSearch, setShouldSearch] = useState<boolean>(false)
	const [searchPhrase, setSearchPhrase] = useState('')

	useEffect(() => {
		const fetchPostsAsync = async (): Promise<void> => {
			try {
				await request(`${API_URL_POST}?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`).then(({ data: { posts, lastPage } }) => {
								setPosts(posts)
								setLastPage(getLastPageFromLinks(lastPage))
							})
			} catch (error) {
				if (error instanceof Error) {
					console.error(error.message)
				} else {
					console.log('Error home page post fetch :(')
				}
			}
		}
		fetchPostsAsync()
	}, [page, shouldSearch])

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
						({ id, title, publishedAt, comments, imageUrl }) => (
							<PostCard
								key={id}
								id={id}
								title={title}
								publishedAt={publishedAt}
								commentsCount={comments.length}
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
