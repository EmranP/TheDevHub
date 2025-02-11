import { ActionType } from "../../../../../app/constant/actions-types";

export const removeComment = (commentId: string) => ({
  type: ActionType.REMOVE_COMMENT,
  payload: commentId
})
