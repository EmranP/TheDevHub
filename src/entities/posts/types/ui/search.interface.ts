import { ComponentPropsType } from '../../../../shared/types/ui'

export interface ISearchProps extends ComponentPropsType {
	onSearch: () => void
	searchPhrase: string
}
