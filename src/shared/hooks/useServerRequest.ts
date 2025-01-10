import { useCallback } from 'react'
import { server } from '../../features/auth/model'
import {
	RequestServerType,
	ServerOperation,
	ServerRequestParams,
} from '../types/hooks/useServerRequest.type'
import { useAppSelector } from './store'

export const useServerRequest = () => {
	const session = useAppSelector(state => state.user.session)

	return useCallback(
		(
			operation: ServerOperation,
			...params: ServerRequestParams
		): RequestServerType => {
			const request = [
				'register',
				'authorize',
				'fetchPost',
				'fetchPosts',
			].includes(operation)
				? params
				: [session, ...params]

			return server[operation](...request)
		},
		[session]
	)
}
