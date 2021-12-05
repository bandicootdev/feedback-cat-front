import './style.css';
import {Link} from "react-router-dom";

export const ButtonAddFeedback = () => {
    return <Link className={'btn btn-add-feedback'} to={`create-feedback`}> Add
        Feedback </Link>
}
