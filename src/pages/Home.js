import {CategoriesContext} from "../contexts/categories";
import {FeedbackContext} from "../contexts/feedback";
import {useContext, useEffect, useState} from "react";
import {NotFeedbackFound} from "../new-components/not-feedback/NotFeedbackFound";
import {LayoutSidebar} from "../LayoutSidebar";
import {FeedbackCard} from "../new-components/feedbackCard/FeedbackCard";
import {getCategories, getFeedbacks} from "../api";

export const Home = () => {
    const {categories, setCategories} = useContext(CategoriesContext);
    const {feedbacks, feedbacksStatus, setFeedbackStatus, setFeedbacks} = useContext(FeedbackContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        try {
            const getData = async () => {
                setLoading(true)
                setFeedbacks([])
                const {data: categoriesData} = await getCategories();
                setCategories(categoriesData)
                const {data: feedbacksData} = await getFeedbacks()
                if (feedbacksData.length > 0) {
                    const planned = feedbacksData.filter((f) => f.status === "PLANNED")
                    const in_progress = feedbacksData.filter((f) => f.status === "IN_PROGRESS")
                    const live = feedbacksData.filter((f) => f.status === "LIVE")
                    const suggestion = feedbacksData.filter((f) => f.status === "SUGGESTION")
                    setFeedbacks(feedbacksData)
                    const x = [{
                        id: 1,
                        name: "PLANNED",
                        count: planned.length
                    },
                        {
                            id: 2,
                            name: "IN_PROGRESS",
                            count: in_progress.length
                        },
                        {
                            id: 3,
                            name: "LIVE",
                            count: live.length
                        },
                        {
                            id: 10,
                            name: "SUGGESTION",
                            count: suggestion.length
                        }]
                    setFeedbackStatus(x)
                    setLoading(false)
                }
            }
            getData()
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }, [setLoading, setFeedbacks, setCategories, setFeedbackStatus])


    return <LayoutSidebar categories={categories || []} status={feedbacksStatus || []}>
        {feedbacks.length > 0
            ? feedbacks.map((f) => <FeedbackCard key={f.id} feedback={f}/>)
            : <NotFeedbackFound/>
        }
    </LayoutSidebar>
}