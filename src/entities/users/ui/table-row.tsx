import { FC } from 'react'
import styled from 'styled-components'
import { WrapperPropsType } from '../../../shared/types/ui'

const TableRowContainer: FC<WrapperPropsType> = ({ className, children }) => (
	<div className={className}>{children}</div>
)

export const TableRow = styled(TableRowContainer)`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-template-rows: auto;
	place-content: space-between;
	place-items: center;

	& > div {
		padding: 0 10px;
	}

	& .login-column {
		width: 172px;
	}

	& .registered-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`
