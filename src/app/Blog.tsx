import { FC, useLayoutEffect } from 'react'
import { setUser } from '../entities/users/model/action/user-action'
import { useAppDispatch } from '../shared/hooks/store'
import { Wrapper } from '../shared/ui/Wrapper'
import { ContentPage, Footer, Header, Modal } from '../widgets/index'

export const Blog: FC = () => {
	const dispatch = useAppDispatch()

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData')

		if (!currentUserDataJSON) return

		const currentUserData = JSON.parse(currentUserDataJSON)

		dispatch(
			setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) })
		)
	}, [dispatch])

	return (
		<Wrapper>
			<Header />
			<ContentPage />
			<Footer />
			<Modal />
		</Wrapper>
	)
}
