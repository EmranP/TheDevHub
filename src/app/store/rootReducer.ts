import { combineReducers } from 'redux'
import { postReducer } from '../../entities/post/model/reducer/post-reducer'
import { userReducer } from '../../entities/users/model/reducer/user-reducer'
import { appReducer } from '../../shared/store/app-reducer'

export const rootReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: (state = {}) => state,
	posts: (state = {}) => state,
	post: postReducer,
})
