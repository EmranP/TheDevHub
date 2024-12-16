import { apiUrl } from '../config/env'
import { ApiGetWeatherType } from '../types/api/weather'

export const getApiDataWeather = async (
	signal: AbortSignal
): Promise<ApiGetWeatherType | undefined> => {
	try {
		const response = await fetch(`${apiUrl}`, { signal })
		if (!response.ok) {
			throw new Error('Error api weather :(')
		}
		const data: ApiGetWeatherType = await response.json()
		console.log(data)
		return data
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		} else {
			console.error('An unknown error occurred')
		}
	}
}
