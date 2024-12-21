import { yupResolver } from '@hookform/resolvers/yup'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../../entities/user/model/action/user-action'
import { Authorization } from '../../../features/auth'
import { server } from '../../../features/auth/model/server'
import { AuthErrorMessage } from '../../../features/auth/ui/ErrorMessage'
import { useAppDispatch, useAppStore } from '../../../shared/hooks/store'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'
import { authFormSchema } from '../../../utils/authFormSchema'

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
	const [errorState, setErrorState] = useState<string | null>(null)

	const navigate = useNavigate()

	const goToPageRegisterHandle = () => {
		reset()
		navigate('/register')
	}

	const store = useAppStore()

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout

		return store.subscribe(() => {
			const prevWasLogout = currentWasLogout
			currentWasLogout = store.getState().app.wasLogout

			if (currentWasLogout !== prevWasLogout) {
				reset()
			}
		})
	}, [reset, store])

	const onSubmitHandler = ({
		login,
		password,
	}: {
		login: string
		password: string
	}) =>
		server.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setErrorState(`Ошибка запроса: ${error}`)
				return
			}

			reset()
			navigate('/')

			return dispatch(setUser(res))
		})

	const formError = errors.login?.message || errors.password?.message
	const errorMessage = formError || errorState

	return (
		<div>
			<Authorization
				title='Авторизация'
				handleSubmit={handleSubmit}
				onSubmitHandler={onSubmitHandler}
			>
				<Input
					type='text'
					placeholder='Логин...'
					{...register('login', { onChange: () => setErrorState(null) })}
				/>
				<Input
					type='password'
					placeholder='Пароль...'
					{...register('password', { onChange: () => setErrorState(null) })}
				/>
				<Button type='submit' disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMessage && (
					<AuthErrorMessage>
						<span>{errorMessage}</span>
					</AuthErrorMessage>
				)}
				<Button onClick={goToPageRegisterHandle} type='button'>
					Регистрация
				</Button>
			</Authorization>
		</div>
	)
}
