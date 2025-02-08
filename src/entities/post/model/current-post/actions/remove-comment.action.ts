import { ActionType } from "../../../../../app/constant/actions-types";

export const removeComment = (commentId) => ({
  type: ActionType.REMOVE_COMMENT,
  payload: commentId
})
