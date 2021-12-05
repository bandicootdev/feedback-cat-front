import './styles.css'
import {Badge} from "../badge/Badge";
import {VoteButton} from "../voteButton/VoteButton";
import ImgComment from '../../assets/shared/icon-comments.svg'
import {Link} from "react-router-dom";

export const FeedbackCard = ({feedback}) => {
    return <div className={'card card-feedback mb-3'}>
        <div className={'card-body px-4 d-md-flex flex-md-row justify-content-between align-items-md-center'}>
            <div className={'d-none d-md-block'}>
                <VoteButton id={feedback.id} count={feedback.upVotes}/>
            </div>
            <Link className={'text-decoration-none flex-grow-1 mx-2'} to={`/feedback/${feedback.id}`}>
                <h2 className={'feedback-title'}>{feedback.title}</h2>
                <p className={'feedback-description'}>{feedback.description}</p>
                <Badge text={feedback.category.name}/>
            </Link>
            <div className={'mt-3 d-flex flex-row justify-content-between'}>
                <div className={'d-block d-md-none'}>
                    <VoteButton id={feedback.id} count={feedback.upVotes}/>
                </div>
                <div className={'d-flex flex-row justify-content-between'}>
                    <div>
                        <img className={'arrow'} src={ImgComment} alt=""/>
                    </div>
                    <span>{feedback.comments.length}</span>
                </div>
            </div>
        </div>
    </div>
}