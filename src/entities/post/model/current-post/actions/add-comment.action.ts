import { ActionType } from "../../../../../app/constant/actions-types";

export const addCommentAction = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: comment
})
