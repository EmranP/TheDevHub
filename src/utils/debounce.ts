import { Dispatch, SetStateAction } from 'react'

export const debounce = (
	fn: Dispatch<SetStateAction<boolean>>,
	delay: number | undefined
) => {
	let timeoutId: ReturnType<typeof setTimeout> | undefined
	return (...args: boolean[]) => {
		clearTimeout(timeoutId)

		timeoutId = window.setTimeout(fn, delay, ...args)
	}
}
