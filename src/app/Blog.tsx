import { FC } from 'react'
import styled from 'styled-components'
import { Content } from '../widgets/content/Content'
import { Footer } from '../widgets/footer/Footer'
import { Header } from '../widgets/header/Header'

const Wrapper = styled.div`
	min-height: 100%;
	overflow: hidden;
	width: 100%;
`

export const Blog: FC = () => {
	return (
		<Wrapper>
			<Header />
			<Content />
			<Footer />
		</Wrapper>
	)
}
