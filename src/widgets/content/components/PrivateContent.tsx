import { FC } from 'react'
import { ERROR } from '../../../app/constant/error'
import { ErrorUI } from '../../../pages/404/ErrorPage'
import { useAppSelector } from '../../../shared/hooks/store'
import { ComponentPrivateContentProps } from '../../../shared/types/ui'
import { checkAccess } from '../../../utils'

export const PrivateContent: FC<ComponentPrivateContentProps> = ({
	children,
	access,
	serverError = null,
}) => {
	const userRole = useAppSelector(state => state.user.roleId)

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED
	const error = serverError || accessError

	return <>{error ? <ErrorUI error={error} /> : children}</>
}
