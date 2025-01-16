import { FeedbaclActionType } from "./feedbackActions"
import { IFeedback } from "./types";

export const initialFeedbackState = {
    variant: null,
    message: ""
}

export const FeedbackReducer = (state:IFeedback, action: FeedbaclActionType) : IFeedback => {
    switch (action.type){
        case 'ADD_FEEDBACK':
            return action.payload;
        case 'REMOVE_FEEDBACK':
            return initialFeedbackState;
        default:
            return state;
    }
}