import { combineReducers } from 'redux'
import { userReducer } from '../../entities/user/model/reducer/user-reducer'
import { appReducer } from '../../shared/store/app-reducer'

export const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: {},
	posts: {},
	post: {},
})
