export const formatDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		day: 'numeric',
		month: 'long',
	}
	return date.toLocaleDateString('ru-RU', options)
}
