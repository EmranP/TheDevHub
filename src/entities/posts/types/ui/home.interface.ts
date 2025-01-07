import { ComponentPropsType } from '../../../../shared/types/ui'

export interface IPostCardProps extends ComponentPropsType {
	id: number | string
	title: string
	publishedAt: string
	commentsCount: number | string
	imageUrl: string
}
