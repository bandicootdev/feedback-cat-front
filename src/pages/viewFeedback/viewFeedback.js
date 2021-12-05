import {LayoutFeedback} from "../../LayoutFeedback";
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {FeedbackCard} from "../../new-components/feedbackCard/FeedbackCard";
import {createReplyForPost, creteComment, getFeedback} from "../../api";
import {CommentCard} from "../../new-components/commentCard/CommentCard";
import {CommendForm} from "../../new-components/commendForm/CommendForm";
import {Toast} from "../../new-components/feedbackForm/feedbackForm";


export const ViewFeedback = () => {
    let params = useParams();
    const [feedback, setFeedback] = useState({});
    const [comments, setComments] = useState([]);
    const [commentData, setCommentData] = useState({
        content: ''
    })

    const [data, setData] = useState({
        content: '',
    });

    const postComment = async () => {
        try {
            const {data: cData} = await creteComment(feedback.id, commentData)
            setComments([...feedback.comments, cData])
            setCommentData({
                content: ''
            })
            await gData()
            await Toast.fire({
                icon: 'success',
                title: 'Comment Created Successfully'
            })
        } catch (err) {
            await Toast.fire({
                icon: 'success',
                title: 'Error in create comment'
            })
        }

    }


    const postReply = async (event) => {
        event.preventDefault();
        try {
            await createReplyForPost(feedback.id, data.comment, data)
            setData({
                content: '',
            })
            await gData()
            await Toast.fire({
                icon: 'success',
                title: 'Reply Created Successfully'
            })
        } catch (err) {
            await Toast.fire({
                icon: 'error',
                title: 'Error in Create Reply'
            })
        }


    }

    const gData = useCallback(() => {
            const getData = async () => {
                const {data} = await getFeedback(params.id)
                setFeedback(data)
                setComments(data.comments)
            }
            getData()
        }, [params.id,setFeedback, setComments],
    );


    useEffect(() => {
        gData()
    }, [])

    return (<LayoutFeedback feedback={feedback}>
            <div>
                {
                    Object.keys(feedback).length > 0 ?
                        <div>
                            <FeedbackCard feedback={feedback}/>
                            <div className={'card mt-5'}>
                                <div className={'card-body'}>
                                    {
                                        comments.map((c) => <>
                                            <CommentCard key={c._id} comment={c}
                                                         data={data}
                                                         setData={setData}
                                                         postReply={postReply}/>
                                            {
                                                c.replies.length > 0 && c.replies.map((re) => <CommentCard key={re._id}
                                                                                                           isReply
                                                                                                           postReply={postReply}
                                                                                                           comment={c}
                                                                                                           data={data}
                                                                                                           setData={setData}
                                                                                                           reply={re}/>)
                                            }
                                        </>)


                                    }
                                </div>
                            </div>
                            <CommendForm data={commentData} setData={setCommentData} postComment={postComment}/>
                        </div>
                        : <p>LOADING</p>

                }
            </div>
        </LayoutFeedback>
    )
}