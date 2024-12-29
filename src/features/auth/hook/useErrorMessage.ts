import { useState } from 'react'
import { AuthErrorMessageHookType } from '../types/ui/index.types'

export const useAuthErrorMessage = (
	initialValue: string | null
): AuthErrorMessageHookType => {
	const [errorAuth, setErrorAuth] = useState(initialValue)

	return { errorAuth, setErrorAuth }
}
