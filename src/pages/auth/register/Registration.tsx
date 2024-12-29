import { yupResolver } from '@hookform/resolvers/yup'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../../entities/users/model/action/user-action'
import { Authorization } from '../../../features/auth'
import { useAuthErrorMessage } from '../../../features/auth/hook/useErrorMessage'
import { useResetForm } from '../../../features/auth/hook/useResetForm'
import { server } from '../../../features/auth/model'
import { AuthErrorMessage } from '../../../features/auth/ui/ErrorMessage'
import { useAppDispatch } from '../../../shared/hooks/store'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'
import { regFormSchema } from '../../../utils/regFormSchema'

export const Registration: FC = () => {
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
			passCheck: '',
		},
		resolver: yupResolver(regFormSchema),
	})
	const { errorAuth, setErrorAuth } = useAuthErrorMessage('')
	const navigate = useNavigate()

	useResetForm({ reset })

	const onSubmitHandler = ({
		login,
		password,
	}: {
		login: string
		password: string
	}) =>
		server.register(login, password).then(({ error, res }) => {
			if (error) {
				setErrorAuth(`Ошибка запроса: ${error}`)
				return
			}

			reset()
			navigate('/')

			return dispatch(setUser(res))
		})

	const formError =
		errors.login?.message ||
		errors.password?.message ||
		errors.passCheck?.message
	const errorMessage = formError || errorAuth

	return (
		<Authorization
			title='Регистрация'
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
			<Input
				type='password'
				placeholder='Проверка пароль...'
				{...register('passCheck', { onChange: () => setErrorAuth(null) })}
			/>
			<Button type='submit' disabled={!!formError}>
				Зарегистрироваться
			</Button>
			{errorMessage && <AuthErrorMessage error={errorMessage} />}
		</Authorization>
	)
}
