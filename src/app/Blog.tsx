import { FC } from 'react'
import { Wrapper } from '../shared/ui/Wrapper'
import { ContentPage, Footer, Header } from '../widgets/index'

export const Blog: FC = () => {
	return (
		<Wrapper>
			<Header />
			<ContentPage />
			<Footer />
		</Wrapper>
	)
}
