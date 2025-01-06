import { ActionRootPostEntities } from '../../../entities/post/types/actions/action-root.type'
import { ActionRootUser } from '../../../entities/users/types/actions/action'
import { ActionsComment } from '../../../features/post/comment/types/actions/actions-root.type'
import { ActionsEditPost } from '../../../features/post/edit-post/types/actions/actions-root.type'

type ActionRootFeaturesPost = ActionsEditPost | ActionsComment

type ActionRootPost = ActionRootPostEntities | ActionRootFeaturesPost

export type ActionRoot = ActionRootUser | ActionRootPost
