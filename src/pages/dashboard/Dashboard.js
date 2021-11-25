import UserCardComponent from "../../components/userCardComponent/UserCardComponent";
import {ListCategoryComponent} from "../../components/listCategoryComponent/ListCategoryComponent";
import {RoadmapStatusComponent} from "../../components/roadmapStatusComponent/RoadmapStatusComponent";
import {FeedbackComponent} from "../../components/feedbackComponent/FeedbackComponent";
import {useEffect, useState} from "react";
import {getFeedbacks, getProducts} from "../../api";


const MOCK_STATUS = [
    {
        id: 1,
        name: "PLANNED",
        count: 2
    },
    {
        id: 2,
        name: "IN_PROGRESS",
        count: 2
    },
    {
        id: 3,
        name: "LIVE",
        count: 2
    }
]

const Dashboard = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [feedbacks, setFeedbacks] = useState([]);

    const getFeedbackRequest = async (id) => {
        const {data: feedbacksData} = await getFeedbacks(id)
        setFeedbacks(feedbacksData)
    }

    const getProductAndFeedbackRequest = async () => {
        const {data: productsData} = await getProducts()
        setProduct(productsData)
    }

    useEffect(() => {
        try {
            getProductAndFeedbackRequest()
            getFeedbackRequest(products[0].id)
        } catch (err) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <>
            <UserCardComponent/>
            <br/>
            <br/>
            <ListCategoryComponent/>
            <br/>
            <br/>
            <RoadmapStatusComponent status={MOCK_STATUS}/>
            {loading ?
                <p>Loading!....</p>
                : feedbacks.length > 0 ?
                    feedbacks.map((feedback) => (<FeedbackComponent key={feedback.id} feedback={feedback}/>))
                    : <p>Component Add here</p>

            }
        </>
    )
}

export default Dashboard;