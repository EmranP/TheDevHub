export const getLastPageFromLinks = (links: string | null): number => {
	const result = links?.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"$/)

	if (result && result[1]) {
		return Number(result[1])
	}

	return 1
}
