import {useState} from "react";

export const CommendForm = ({data, setData, postComment}) => {
    const [inputError, setInputError] = useState(false);
    const onchangeDescription = (event) => {
        event.preventDefault()
        setData({
            ...data,
            content: event.target.value
        })
        if (event.target.value === '') {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    return <div className={'card'}>
        <div className={'card-body'}>
            <h3>Add commend</h3>
            <form  className={'mt-5'}>
                <div className="mb-3">
                    <textarea
                        className={`textarea-form-height form-control ${data.content === '' && inputError ? 'msg-error-input' : ''}`}
                        id={"exampleFormControlTextarea1"} rows="3"
                        aria-describedby="comment-content"
                        onChange={onchangeDescription}
                        value={data.content}
                    />
                    <div id={"comment-content"}
                         className={`form-text ${data.content.length > 250 && inputError ? 'msg-error' : ''} `}>
                        <p className={`${data.content.length === 250 && inputError ? 'msg-error' : ''}`}>{250 - data.content?.length} Characters left</p>
                    </div>
                    {
                        data.content === '' && inputError &&
                        <div id={"comment-content"}
                             className={`form-text ${data.content === '' && inputError ? 'msg-error' : ''} `}>
                            <p>Cant'be empty</p>
                        </div>
                    }

                </div>
                <div
                    className={'d-flex flex-column align-items-center  mt-5 flex-md-row justify-content-md-between flex-column-reverse'}>
                    <div className={'d-flex flex-column-reverse flex-md-row justify-content-md-end w-100'}>
                        <button type={'button'} onClick={postComment}
                                className={' rounded-md btn button-add-new-feedback'}> Post Commend
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}