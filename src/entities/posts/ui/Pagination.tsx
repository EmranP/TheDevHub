import { FC } from 'react'
import styled from 'styled-components'
import { Button } from '../../../shared/ui'
import { IPaginationProps } from '../index.export'

const PaginationContainer: FC<IPaginationProps> = ({
	className,
	setPage,
	page,
	lastPage,
}) => {
	return (
		<div className={className}>
			<Button disabled={page === 1} onClick={() => setPage(1)}>
				В начало
			</Button>
			<Button disabled={page === 1} onClick={() => setPage(page - 1)}>
				Пердыдущая
			</Button>
			<div className='current-page'>
				<span>Страница: {page}</span>
			</div>
			<Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
				Следующая
			</Button>
			<Button
				disabled={page === lastPage}
				onClick={() => setPage(Number(lastPage))}
			>
				В конец
			</Button>
		</div>
	)
}

export const Pagination = styled(PaginationContainer)`
	display: flex;
	justify-content: center;
	margin: 10px 0;
	padding: 0 40px;

	& button {
		margin: 0 5px;
	}

	& .current-page {
		width: 100%;
		font-size: 18px;
		font-weight: 500;
		text-align: center;
		border: 1px solid #000;
		border-radius: 10px;

		& span {
			display: block;
			line-height: 300%;
		}
	}
`
