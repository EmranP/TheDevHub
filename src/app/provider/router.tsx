import { FC } from 'react'
import {
	createBrowserRouter,
	RouterProvider,
	useRouteError,
} from 'react-router-dom'
import { NotFoundPage } from '../../pages/404/NotFoundPage'
import { Login } from '../../pages/auth/login/Login'
import { Register } from '../../pages/auth/register/Register'
import { HomePage } from '../../pages/home/HomePage'
import { CurrentPost } from '../../pages/post/CurrentPost'
import { Post } from '../../pages/post/Post'
import { Users } from '../../pages/user/User'
import { Blog } from '../Blog'

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
				element: <Register />,
				errorElement: <BubbleError />,
			},
			{
				path: 'users',
				element: <Users />,
				errorElement: <BubbleError />,
			},
			{
				path: 'post',
				element: <Post />,
				errorElement: <BubbleError />,
			},
			{
				path: 'post/:postId',
				element: <CurrentPost />,
				errorElement: <BubbleError />,
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
	return <RouterProvider router={router} />
}
