import {useCallback, useEffect, useState} from "react";
import {getFeedbacks} from "../../api";

export const Roadmap = () => {
    const [loading, setLoading] = useState(false)
    const [planned, setPlanned] = useState([])
    const [inProgress, setInProgress] = useState([])
    const [live, setLive] = useState([])

    const getData = useCallback(() => {
        const getFeedbacksData = async () => {
            setLoading(true)
            const {data: feedbacksData} = await getFeedbacks()
            const planned = feedbacksData.filter((f) => f.status === "PLANNED")
            const in_progress = feedbacksData.filter((f) => f.status === "IN_PROGRESS")
            const live = feedbacksData.filter((f) => f.status === "LIVE")
            setPlanned(planned)
            setInProgress(in_progress)
            setLive(live)
            setLoading(false)
        }
        getFeedbacksData()
    }, [])

    useEffect(() => {
        try {
            getData()
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [getData,setLoading])

    return <>
        <p>ROADMAP LIST</p>
        <p>Planned - {planned.length}</p>
        <p>InProgress - {inProgress.length}</p>
        <p>live - {live.length}</p>
    </>
}