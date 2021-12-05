import {ButtonAddFeedback} from "../buttonAddFeedback/buttonAddFeedback";
import imageNotFound from '../../assets/suggestions/illustration-empty.svg';
import './style.css';

export const NotFeedbackFound = () => {
    return <div className={'card card-not-found-feedback'}>
        <div className={'card-body d-flex flex-column align-items-center py-5 px-4'}>
            <div className={'d-flex flex-column align-items-center py-5 px-4'}>
                <img src={imageNotFound} className={'img-fluid mb-5'} alt=""/>
                <h3>There is no feedback yet</h3>
                <p className={'text-center'}>Got a suggestion? Found a bug that needs to be squashed? we love hearing about new ideas to
                    improve</p>
                <ButtonAddFeedback/>
            </div>
        </div>
    </div>
}