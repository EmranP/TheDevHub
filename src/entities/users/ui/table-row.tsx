import { FC } from 'react'
import styled from 'styled-components'
import { WrapperPropsType } from '../../../shared/types/ui'

const TableRowContainer: FC<WrapperPropsType> = ({ className, children }) => (
	<div className={className}>{children}</div>
)

export const TableRow = styled(TableRowContainer)`
	display: flex;
	gap: 5px;
	padding: 5px;
	& > div {
		display: flex;
		algin-items: center;
	}

	& .login-column {
		width: 172px;
	}

	& .registered-column {
		width: 213px;
	}

	& .role-column {
		display: flex;
		gap: 10px;
		width: auto;
		& > select {
			font-size: 16px;
		}
	}
`
