import {createContext} from "react";


export const FeedbackContext = createContext({
    feedbacks: [],
    setFeedbacks: () => {},
    feedbacksStatus: {},
    setFeedbackStatus: () => {}
})