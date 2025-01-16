import { IFeedback } from "../state/types";

export interface EmailInputProps {
    handleFeedback: (action: "create" | "remove" , feeback: IFeedback) => void
}