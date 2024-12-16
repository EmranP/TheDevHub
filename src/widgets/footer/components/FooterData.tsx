import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getApiDataWeather } from '../../../shared/api/weather'
import { formatDate } from '../../../utils/formatDate'

const FooterDateStyled = styled.span`
	font-weight: 700;
	font-size: 25px;
	color: #1c1c1c;
`

const FooterWeatherStyled = styled.div`
	margin-bottom: 10px;
`

export const FooterDate: FC = () => {
	const [climate, setClimate] = useState({
		city: '',
		temp: 0,
		weather: '',
	})
	const date = new Date()
	const formattedDate: string = formatDate(date)

	const fetchAndSetWeather = async () => {
		const controller = new AbortController()
		try {
			const data = await getApiDataWeather(controller.signal)

			if (data) {
				const { name, weather, main } = data

				setClimate({
					city: name,
					weather: weather[0].description,
					temp: Math.round(main.temp),
				})
			}
		} catch (error) {
			if (error instanceof Error) {
				if (error.name === 'AbortError') {
					console.log('Request aborted')
				} else {
					console.error(error)
				}
			}
		}

		return () => controller.abort()
	}

	useEffect(() => {
		fetchAndSetWeather()
	}, [])

	const { city, temp, weather } = climate

	return (
		<div>
			<FooterWeatherStyled>
				<FooterDateStyled>{formattedDate}</FooterDateStyled>{' '}
				<FooterDateStyled>{city}</FooterDateStyled>
			</FooterWeatherStyled>
			<div>
				{city ? (
					<FooterDateStyled>
						{temp} градусов, {weather}
					</FooterDateStyled>
				) : (
					<FooterDateStyled>Данные не загрузились</FooterDateStyled>
				)}
			</div>
		</div>
	)
}
