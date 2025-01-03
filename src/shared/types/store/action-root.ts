import { ActionRootCurrentPost } from '../../../entities/post/types/current-post/actions/actions.root-type'
import { ActionRootUser } from '../../../entities/users/types/actions/action'

export type ActionRoot = ActionRootUser | ActionRootCurrentPost
