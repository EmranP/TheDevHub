import { SearchCode } from 'lucide-react'
import { FC } from 'react'
import styled from 'styled-components'
import { Input } from '../../../shared/ui'
import { ISearchProps } from '../types/ui/search.interface'

const SearchContainer: FC<ISearchProps> = ({
	className,
	searchPhrase,
	onSearch,
}) => {
	return (
		<div className={className}>
			<Input
				placeholder='Поиск по заголовкам...'
				value={searchPhrase}
				onChange={onSearch}
			/>
			<SearchCode size={27} />
		</div>
	)
}

export const Search = styled(SearchContainer)`
	display: flex;
	width: 380px;
	height: 40px;
	margin: 0 auto;
	position: relative;
	z-index: 1;

	& > input {
		padding: 10px 42px 10px 10px;
	}

	& > svg {
		position: absolute;
		top: 6.5px;
		right: 9px;
	}
`
