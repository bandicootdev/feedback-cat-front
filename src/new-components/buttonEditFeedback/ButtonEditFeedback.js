import {Link} from "react-router-dom";

export const ButtonEditFeedback = ({feedback}) => {
    return <>
        {
            feedback && <Link className={'btn btn-add-feedback'} to={`/update-feedback/${feedback.id}`}> Edit
                Feedback </Link>
        }
    </>
}