interface WeatherMainType {
	temp: number
}

interface WeatherDescription {
	description: string
}

export interface ApiGetWeatherType {
	name: string
	main: WeatherMainType
	weather: WeatherDescription[]
}
