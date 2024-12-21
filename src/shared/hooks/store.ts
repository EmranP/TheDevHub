import { useDispatch, useSelector, useStore } from 'react-redux'
import { AppDispatch, RootState } from '../types/store/app-store'

export const useAppStore = () => useStore<RootState>()
export const useAppSelector = <TSelected>(
	selector: (state: RootState) => TSelected
): TSelected => useSelector<RootState, TSelected>(selector)
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
