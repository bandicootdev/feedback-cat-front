import {Badge} from "../badge/Badge";
import './style.css';
import {getFeedbacks} from "../../api";
import {FeedbackContext} from "../../contexts/feedback";
import {useContext} from "react";

export const CategoryCard = ({categories, className}) => {
    const {setFeedbacks} = useContext(FeedbackContext);
    const getFeedbackForCategory = async (id) => {
        const {data} = await getFeedbacks({
            category: id,
        })
        setFeedbacks(data)
    }

    const getAllFeedbacks = async () => {
        const {data} = await getFeedbacks()
        setFeedbacks(data)
    }
    return <div className={`card ${className}`}>
        <div className={'card-body d-flex flex-wrap justify-content-between'}>
            <div>
                <Badge key={'1'} text={'All'} onClick={() => getAllFeedbacks()}/>
                {
                    categories.map((c) => <Badge onClick={() => getFeedbackForCategory(c.id)} key={c.id}
                                                 text={c.name}/>)
                }
            </div>
        </div>
    </div>
}