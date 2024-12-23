import { ThunkAction } from 'redux-thunk'
import { store } from '../../../app/store'
import { rootReducer } from '../../../app/store/rootReducer'
import { ActionRoot } from './action-root'

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	ActionRoot
>
