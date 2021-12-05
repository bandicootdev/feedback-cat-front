import './styles.css'
import {ButtonAddFeedback} from "../buttonAddFeedback/buttonAddFeedback";
import {useContext} from "react";
import {FeedbackContext} from "../../contexts/feedback";
import focus from '../../assets/suggestions/icon-suggestions.svg'

export const SearchBar = ({suggestions}) => {
    const {feedbacks, setFeedbacks} = useContext(FeedbackContext)
    const mostVotes = (event) => {
        console.log(event.target.value)
        let nfeedbacks;
        if (event.target.value === '1') {
            nfeedbacks = feedbacks.sort((a, b) => a.upVotes - b.upVotes)
            console.log(nfeedbacks)
            setFeedbacks(nfeedbacks)
        }

        if (event.target.value === '2') {
            nfeedbacks = feedbacks.sort((a, b) => b.upVotes - a.upVotes)
            setFeedbacks(nfeedbacks)
        }

        if (event.target.value === '3') {
            nfeedbacks = feedbacks.sort((a, b) => a.comments.length - b.comments.length)
            setFeedbacks(nfeedbacks)
        }

        if (event.target.value === '4') {
            nfeedbacks = feedbacks.sort((a, b) => b.comments.length - a.comments.length)
            setFeedbacks(nfeedbacks)
        }
    }


    return <div className={'search-bar d-flex flex-row justify-content-between px-4 w-100 align-items-center'}>
        <div className={'d-none d-md-block d-lg-block'}>
            <img src={focus} alt=""/>
            <span className={'p-2'}>{suggestions} Suggestions</span>
        </div>

        {/*sort no rendered*/}
        {/*<div>*/}
        {/*    <span className={'mb-0'}>Sort By:</span>*/}
        {/*    <div className={'content-select-category'}>*/}
                {/*<select onChange={mostVotes}*/}
                {/*        className={`color-input-gray form-select`}*/}
                {/*        id="exampleFormControlInput4"*/}
                {/*        aria-label="Default select example" aria-describedby="feedback-category">*/}
                {/*    <option value={1}> Most Upvotes</option>*/}
                {/*    <option value={2}> Least Upvotes</option>*/}
                {/*    <option value={3}> Most Comments</option>*/}
                {/*    <option value={4}> Least Comments</option>*/}
                {/*</select>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <ButtonAddFeedback/>
    </div>
}