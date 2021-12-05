import ArrowUp from '../../assets/shared/icon-arrow-up.svg'
import './styles.css'
import {updateFeedback} from "../../api";
import {useEffect, useState} from "react";


export const VoteButton = ({id, count}) => {
    const [voteCount, setVoteCount] = useState(0);

    const voteUpFeedback = async (id, count) => {
        setVoteCount(count + 1)
        await updateFeedback(id, {upVotes: count + 1})
    }

    useEffect(() => {
        setVoteCount(count)
    }, [setVoteCount]);

    return <>
        {
            <div onClick={() => voteUpFeedback(id, count)}
                 className={'vote-button d-flex flex-row justify-content-around align-items-center d-md-flex flex-md-column'}>
                <img className={'img-fluid'} src={ArrowUp}/>
                <span className={'text-black'}>{voteCount}</span>
            </div>
        }
    </>
}