import { Post } from './posts.interface'
import { Roles } from './roles.interface'
import { User } from './user.interface'

export interface Blog {
	users: User[]
	roles: Roles[]
	posts: Post[]
}
