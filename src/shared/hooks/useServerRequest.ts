import { useCallback } from 'react'
import { server } from '../../features/auth/model'
import { ServerOperation } from '../types/hooks/useServerRequest.type'
import { useAppSelector } from './store'

export const useServerRequest = () => {
	const session = useAppSelector(state => state.user)

	return useCallback(
		(operation: ServerOperation, ...params: any[]) => {
			const request = ['register', 'authorize'].includes(operation)
				? params
				: [session.session, ...params]
			console.log(params)

			return server[operation](...request)
		},
		[session]
	)
}
