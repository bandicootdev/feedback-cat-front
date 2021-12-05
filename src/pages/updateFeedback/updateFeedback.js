import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {LayoutFeedback} from "../../LayoutFeedback";
import {getFeedback, getFeedbacksStatus} from "../../api";
import {FeedbackForm} from "../../new-components/feedbackForm/feedbackForm";

export const UpdateFeedback = () => {
    let params = useParams();
    const [feedback, setFeedback] = useState({})
    const [feedbackStatus, setFeedbackStatus] = useState([])

    useEffect(() => {
        const getData = async () => {
            const {data} = await getFeedback(params.id)
            const {data: fStatus} = await getFeedbacksStatus()
            setFeedback(data)
            setFeedbackStatus(fStatus.status)
        }
        getData()
    }, [params.id, setFeedback])
    return (
        <LayoutFeedback feedback={feedback}>
            {feedback && <FeedbackForm feedback={feedback} status={feedbackStatus}/>}
        </LayoutFeedback>
    )
}