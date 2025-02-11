import { yupResolver } from '@hookform/resolvers/yup'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../../entities/users/model/action/user-action'
import { Authorization } from '../../../features/auth'
import { useAuthErrorMessage } from '../../../features/auth/hook/useErrorMessage'
import { useResetForm } from '../../../features/auth/hook/useResetForm'
import { AuthErrorMessage } from '../../../features/auth/ui/ErrorMessage'
import { useAppDispatch } from '../../../shared/hooks/store'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'
import { authFormSchema } from '../../../utils/authFormSchema'
import { request } from '../../../utils/request.util'
import { API_URL_AUTH_LOGIN } from '../../../app/constant/api'

export const Login: FC = () => {
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	})

	const { errorAuth, setErrorAuth } = useAuthErrorMessage('')
	const navigate = useNavigate()
	useResetForm({ reset })

	const goToPageRegisterHandle = () => {
		reset()
		navigate('/register')
	}

	const onSubmitHandler = ({
		login,
		password,
	}: {
		login: string
		password: string
	}) =>
		request(API_URL_AUTH_LOGIN, 'POST', { login, password }).then(({error, user}) => {
			if (error) {
				setErrorAuth(`Ошибка запроса: ${error}`)
				return
			}
			reset()
			navigate('/')

			dispatch(setUser(user))
			return sessionStorage.setItem('userData', JSON.stringify(user))
		})

	const formError = errors.login?.message || errors.password?.message
	const errorMessage = formError || errorAuth

	return (
		<Authorization
			title='Авторизация'
			handleSubmit={handleSubmit}
			onSubmitHandler={onSubmitHandler}
		>
			<Input
				type='text'
				placeholder='Логин...'
				{...register('login', { onChange: () => setErrorAuth(null) })}
			/>
			<Input
				type='password'
				placeholder='Пароль...'
				{...register('password', { onChange: () => setErrorAuth(null) })}
			/>
			<Button type='submit' disabled={!!formError}>
				Авторизоваться
			</Button>
			{errorMessage && <AuthErrorMessage error={errorMessage} />}
			<Button onClick={goToPageRegisterHandle} type='button'>
				Регистрация
			</Button>
		</Authorization>
	)
}
