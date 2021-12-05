import {Link} from "react-router-dom";
import arrowLeft from "./assets/shared/icon-arrow-left.svg";
import {ButtonEditFeedback} from "./new-components/buttonEditFeedback/ButtonEditFeedback";

export const LayoutFeedback = ({children, feedback}) => {
    return (
        <div className={'bg-color-layout'}>
            <div className={' container d-flex flex-row justify-content-between p-4'}>
                <Link className={'deleteDecorations'} to={`/`}>
                    <p><img src={arrowLeft} alt=""/> Go Back</p>
                </Link>
                {
                    feedback && <ButtonEditFeedback feedback={feedback}/>
                }
            </div>
            <div className={' container p-4'}>
                {children}
            </div>

        </div>
    )
}