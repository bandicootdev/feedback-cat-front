import {BadgeComponent} from "../badgeComponent/BadgeComponent";
import {VoteUpButtonComponent} from "./voteUpButtonComponent/voteUpButtonComponent";
import {CountCommentsComponent} from "./countCommentsComponent/CountCommentsComponent";

export const FeedbackComponent = ({feedback}) => {
  return (
      <>
          <VoteUpButtonComponent votes={feedback.upVotes}/>
          <h3>{feedback?.title}</h3>
          <h3>{feedback?.description}</h3>
          <BadgeComponent name={feedback.category}/>
          <CountCommentsComponent count={feedback.countComments} />
      </>
  )
}