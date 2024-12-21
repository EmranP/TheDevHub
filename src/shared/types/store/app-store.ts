import { store } from '../../../app/store'
import { rootReducer } from '../../../app/store/rootReducer'

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
