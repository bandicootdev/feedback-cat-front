import imgUser from '../../assets/user-images/image-anne.jpg';
import {useState} from "react";

export const CommentCard = ({comment, isReply, data, setData, postReply, reply }) => {
    const [inputError, setInputError] = useState(false);
    const [addReply, setAddReply] = useState(false);
    const onchangeTextReply = (event) => {
        if (event.target.value.length <= 250) {
            setData({
                ...data,
                replyingTo: Object.keys(comment.user).length > 0 ? comment.user : comment.replyingTo,
                content: event.target.value,
                comment: comment._id
            })
        }
        if (event.target.value === '') {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    return <div className={`m-4 ${isReply && " ps-4"}`}>
        <div className={`d-flex flex-row justify-content-between align-items-center`}>
            <img className={'rounded-circle me-3'} src={imgUser} alt={''}/>
            <div className={'flex-grow-1'}>
                <h3 className={'my-0'}>NAME</h3>
                <p className={'my-0'}>@{isReply ? reply.replyingTo.username : comment.user.username}</p>
            </div>
            <button onClick={() => setAddReply(!addReply)} className={'btn'}>Reply</button>
        </div>
        <div>
            <span>{isReply ? `@${reply.replyingTo.username} ${reply.content}` : comment.content}</span>
        </div>
        {
            addReply && <form onSubmit={postReply}>
                <div className={'d-flex flex-row  justify-content-between '}>
                    <div className="mb-3 mt-2 w-100">
                    <textarea
                        className={`textarea-form-height  form-control ${data.content === '' && inputError ? 'msg-error-input' : ''}`}
                        id={"exampleFormControlTextarea1"} rows="3"
                        aria-describedby="feedback-description"
                        onChange={onchangeTextReply}
                    />
                        <div id={"comment-content"}>
                            <p className={`form-text ${data.content.length === 250 && inputError ? 'msg-error' : ''} `}>
                                {250 - data.content.length} Characters left</p>
                        </div>
                        {
                            data.content === '' && inputError &&
                            <div id={"comment-content"}
                                 className={`form-text ${data.content === '' && inputError ? 'msg-error' : ''} `}>
                                <p>Cant'be empty</p>
                            </div>
                        }
                    </div>
                    <div className={'p-3'}>
                        <button type={'submit'}
                                className={'rounded-md btn btn-add-feedback'}> Post Reply
                        </button>
                    </div>
                </div>
            </form>

        }
    </div>

}