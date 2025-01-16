import { initialFeedbackState } from "./feedbackReducer";
import { IFeedback } from "./types";

export const addFeedback = (feedback: IFeedback) => ({
    type: "ADD_FEEDBACK",
    payload: feedback
} as const);

export const removeFeedBack = () => ({
    type: "REMOVE_FEEDBACK",
    payload: initialFeedbackState
} as const);

export type FeedbaclActionType = ReturnType<typeof addFeedback> | ReturnType<typeof removeFeedBack>;