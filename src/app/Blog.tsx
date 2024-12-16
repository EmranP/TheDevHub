import { FC } from 'react'
import { Wrapper } from '../shared/ui/Wrapper'
import { Content, Footer, Header } from '../widgets/index'

export const Blog: FC = () => {
	return (
		<Wrapper>
			<Header />
			<Content />
			<Footer />
		</Wrapper>
	)
}
