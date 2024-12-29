import { useEffect } from 'react'
import { useAppStore } from '../../../shared/hooks/store'
import { LogoutProps } from '../types/ui/index.types'

export const useResetForm = ({ reset }: LogoutProps) => {
	const store = useAppStore()

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout

		return store.subscribe(() => {
			const prevWasLogout = currentWasLogout
			currentWasLogout = store.getState().app.wasLogout

			if (currentWasLogout !== prevWasLogout) {
				reset()
			}
		})
	}, [reset, store])
}
