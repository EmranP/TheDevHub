import { FC } from 'react'
import { Provider } from 'react-redux'
import {
	createBrowserRouter,
	RouterProvider,
	useRouteError,
} from 'react-router-dom'
import { NotFoundPage } from '../../pages/404/NotFoundPage'
import { Login } from '../../pages/auth/login/Login'
import { Registration } from '../../pages/auth/register/Registration'
import { HomePage } from '../../pages/home/HomePage'
import { Post } from '../../pages/post/Post'
import { PostForm } from '../../pages/post/PostForm'
import { Posts } from '../../pages/post/Posts'
import { Users } from '../../pages/user/Users'
import { Blog } from '../Blog'
import { store } from '../store'

const BubbleError: FC = () => {
	const error = useRouteError()
	if (error) throw error
	return null
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Blog />,
		errorElement: <BubbleError />,
		children: [
			{
				path: '',
				element: <HomePage />,
				errorElement: <BubbleError />,
			},
			{
				path: 'login',
				element: <Login />,
				errorElement: <BubbleError />,
			},
			{
				path: 'register',
				element: <Registration />,
				errorElement: <BubbleError />,
			},
			{
				path: 'users',
				element: <Users />,
				errorElement: <BubbleError />,
			},
			{
				path: 'post',
				element: <Posts />,
				errorElement: <BubbleError />,
			},
			{
				path: 'post/:id',
				element: <Post />,
				errorElement: <BubbleError />,
				children: [
					{
						path: 'edit',
						element: <PostForm />,
						errorElement: <BubbleError />,
					},
				],
			},
			// Page 404
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
	// Page 404
	{
		path: '*',
		element: <NotFoundPage />,
	},
	{
		path: '',
		element: <NotFoundPage />,
	},
])

export const BrowserRouter: FC = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	)
}
