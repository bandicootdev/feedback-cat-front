import newFeedback from "../../assets/shared/icon-new-feedback.svg";
import {CategoriesContext} from "../../contexts/categories";
import {useContext, useEffect, useState} from "react";
import Swal from 'sweetalert2'
import './styles.css'
import {addNewFeedback, deleteFeedback, updateFeedback} from "../../api";
import {useNavigate} from "react-router-dom";
import EditFeedback from '../../assets/shared/icon-edit-feedback.svg'
import {FeedbackContext} from "../../contexts/feedback";

export const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


export const FeedbackForm = ({feedback, status}) => {
    let navigate = useNavigate();
    const {categories} = useContext(CategoriesContext);
    const {feedbacks, setFeedbacks} = useContext(FeedbackContext);

    const [data, setData] = useState({
        title: '',
        description: '',
        category: '',
        status: ''
    })

    const [inputError, setInputError] = useState(false)

    useEffect(() => {
        if (feedback && feedback.title && feedback.description && feedback.category) {
            setData({
                title: feedback.title,
                description: feedback.description,
                category: feedback.category._id,
                status: feedback.status
            })
        }

    }, [feedback, setData])


    const delFeedback = async () => {
        try {
            await deleteFeedback(feedback.id)
            await Toast.fire({
                icon: 'success',
                title: 'Feedback Created Successfully'
            })
            setFeedbacks(feedbacks.filter((f) => f.id !== feedback.id))
            navigate(`/`);
        } catch (err) {
            if (err.response.data.statusCode === 400) {
                await Toast.fire({
                    icon: 'error',
                    title: 'Oops! an error has occurred please try again'
                })
            } else if (err.response.data.statusCode === 500) {
                await Toast.fire({
                    icon: 'error',
                    title: 'Server error'
                })
            } else {
                await Toast.fire({
                    icon: 'error',
                    title: 'Server error'
                })
            }
        }
    }

    const createFeedbackAsync = async (event) => {
        event.preventDefault();
        if (data.category === ''
            || data.title === ''
            || data.description === '') {
            setInputError(true)
        } else {
            setInputError(false)
            try {
                await addNewFeedback({
                    category: data.category,
                    title: data.title,
                    description: data.description,
                })

                await Toast.fire({
                    icon: 'success',
                    title: 'Feedback Created Successfully'
                })
                navigate(`/`);
            } catch (err) {
                if (err.response.data.statusCode === 400) {
                    await Toast.fire({
                        icon: 'error',
                        title: 'Oops! an error has occurred please try again'
                    })
                } else if (err.response.data.statusCode === 500) {
                    await Toast.fire({
                        icon: 'error',
                        title: 'Server error'
                    })
                } else {
                    await Toast.fire({
                        icon: 'error',
                        title: 'Server error'
                    })
                }
            }
        }
    }

    const updateFeedbackAsync = async (event) => {
        event.preventDefault();
        console.log(data.category)
        console.log(data.title)
        console.log(data.description)
        console.log(data.status)
        if (data.category === ''
            || data.title === ''
            || data.description === ''
            || data.status === '') {
            setInputError(true)
        } else {
            setInputError(false)
            try {
                await updateFeedback(feedback.id, {
                    category: data.category,
                    title: data.title,
                    description: data.description,
                    status: data.status
                })

                await Toast.fire({
                    icon: 'success',
                    title: 'Feedback Created Successfully'
                })
                navigate(`/`);
            } catch (err) {
                if (err.response.data.statusCode === 400) {
                    await Toast.fire({
                        icon: 'error',
                        title: 'Oops! an error has occurred please try again'
                    })
                } else if (err.response.data.statusCode === 500) {
                    await Toast.fire({
                        icon: 'error',
                        title: 'Server error'
                    })
                } else {
                    await Toast.fire({
                        icon: 'error',
                        title: 'Server error'
                    })
                }
            }
        }
    }

    const selectCategory = (event) => {
        setData({
            ...data,
            category: event.target.value
        })
        if (event.target.value === '') {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    const onchangeTitle = (event) => {
        setData({
            ...data,
            title: event.target.value
        })
        if (event.target.value === '') {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    const onchangeDescription = (event) => {
        setData({
            ...data,
            description: event.target.value
        })

        if (event.target.value === '') {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    const onchangeFeedbackStatus = (event) => {
        setData({
            ...data,
            status: event.target.value
        })

        if (event.target.value === '') {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }

    return <section className={'card min-vh-100 mt-5'}>
        <div className={'card-body'}>
            <img src={feedback ? EditFeedback : newFeedback} className={'position-absolute position-top'} alt={''}/>
            <div className={'mt-4'}>
                {
                    feedback ?
                        <h3>Editing '{data.title}'</h3> :
                        <h3>Create New Feedback</h3>
                }

                <form
                    onSubmit={feedback && Object.keys(feedback).length > 0 ? updateFeedbackAsync : createFeedbackAsync}
                    className={'mt-5'}>
                    <div className="mb-3">
                        <label htmlFor={"exampleFormControlInput1"} className={"form-label"}>Feedback
                            title</label>
                        <div id={"feedback-title"} className="form-text">Add a short, descriptive headline
                        </div>
                        <input type="text"
                               className={`color-input-gray 
                           form-control 
                           ${data.title === '' && inputError ? 'msg-error-input' : ''}`
                               }
                               id={"exampleFormControlInput1"}
                               aria-describedby="feedback-title"
                               onChange={onchangeTitle}
                               value={data?.title}
                        />
                        {
                            data.title === '' && inputError &&
                            <div id={"feedback-title"}
                                 className={`form-text ${data.title === '' && inputError ? 'msg-error' : ''} `}>
                                <p>Cant'be
                                    empty</p>
                            </div>
                        }

                    </div>
                    {
                        !feedback && <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Category</label>
                            <div id={'feedback-category'} className={'form-text'}> Choose a category for our
                                feedback
                            </div>
                            <div className={'content-select-category'}>
                                <select value={data?.category}
                                        className={`color-input-gray form-select ${data.category === '' && inputError ? 'msg-error-input' : ''}`}
                                        id="exampleFormControlInput2"
                                        aria-label="Default select example" aria-describedby="feedback-category"
                                        onChange={selectCategory}>
                                    {
                                        categories.map((c) => (<option key={c.id} value={c.id}> {c.name} </option>))
                                    }
                                </select>
                            </div>
                            {
                                data.category === '' && inputError &&
                                <div id={"feedback-category"} className={`form-text ${inputError ? 'msg-error' : ''} `}>
                                    <p>Cant'be empty</p>
                                </div>
                            }
                        </div>
                    }
                    {
                        feedback && feedback.category && <div className="mb-3">

                            <label htmlFor="exampleFormControlInput3" className="form-label">Category</label>
                            <div id={'feedback-category'} className={'form-text'}> Choose a category for our
                                feedback
                            </div>

                            <div className={'content-select-category'}>
                                <select value={data?.category}
                                        className={`color-input-gray form-select ${data.category === '' && inputError ? 'msg-error-input' : ''}`}
                                        id="exampleFormControlInput4"
                                        aria-label="Default select example" aria-describedby="feedback-category"
                                        onChange={selectCategory}>
                                    {
                                        categories.map((c) => (<option key={c.id} value={c.id}> {c.name} </option>))
                                    }
                                </select>
                            </div>
                            {
                                data.category === '' && inputError &&
                                <div id={"feedback-category"} className={`form-text ${inputError ? 'msg-error' : ''} `}>
                                    <p>Cant'be empty</p>
                                </div>
                            }
                        </div>
                    }

                    {
                        feedback && feedback.status && <div className="mb-3">
                            <label htmlFor="exampleFormControlInput4" className="form-label">Status</label>
                            <div id={'feedback-status'} className={'form-text'}> Choose a category for our
                                feedback
                            </div>
                            <div className={'content-select-status'}>
                                <select value={data?.status}
                                        className={`color-input-gray form-select ${data.status === '' && inputError ? 'msg-error-input' : ''}`}
                                        id="exampleFormControlInput4"
                                        aria-label="Default select example" aria-describedby="feedback-status"
                                        onChange={onchangeFeedbackStatus}>
                                    {
                                        status.map((c) => (<option key={c.id} value={c.name}> {c.name} </option>))
                                    }
                                </select>
                            </div>
                            {
                                data.category === '' && inputError &&
                                <div id={"feedback-status"} className={`form-text ${inputError ? 'msg-error' : ''} `}>
                                    <p>Cant'be empty</p>
                                </div>
                            }
                        </div>
                    }

                    <div className="mb-3">
                        <label htmlFor={"exampleFormControlTextarea1"} className="form-label">Feedback
                            Detail</label>
                        <div id={'feedback-description'} className={'form-text'}>Include any specific
                            comments on what should be improved, add etc
                        </div>
                        <textarea
                            className={`textarea-form-height form-control ${data.description === '' && inputError ? 'msg-error-input' : ''}`}
                            id={"exampleFormControlTextarea1"} rows="3"
                            aria-describedby="feedback-description"
                            onChange={onchangeDescription}
                            value={data.description}
                        />
                        {
                            data.description === '' && inputError &&
                            <div id={"feedback-category"}
                                 className={`form-text ${data.description === '' && inputError ? 'msg-error' : ''} `}>
                                <p>Cant'be empty</p>
                            </div>
                        }
                    </div>


                    <div
                        className={`d-flex flex-column align-items-center  mt-5 flex-md-row justify-content-md-between flex-column-reverse`}>
                        <div className={'d-flex flex-column-reverse flex-md-row justify-content-md-between w-100'}>
                            {
                                feedback && <button type={'button'} onClick={delFeedback}
                                                    className={'rounded-md btn button-add-delete-feedback mt-4'}> Delete
                                </button>
                            }
                            <div className={' d-none d-md-block mt-4'}>
                                <button type={'button'} onClick={() => navigate(`/feedback/${feedback.id}`)}
                                        className={'rounded-md btn button-add-cancel-feedback me-3'}> Cancel
                                </button>
                                <button type={'submit'}
                                        className={' rounded-md btn button-add-new-feedback'}> {feedback ? 'Save Changes' : 'Add Feedback'}</button>

                            </div>

                            <button type={'button'} onClick={() => navigate(`/feedback/${feedback.id}`)}
                                    className={'rounded-md btn button-add-cancel-feedback mt-4 d-block d-md-none'}> Cancel
                            </button>
                            <button type={'submit'}
                                    className={' rounded-md btn button-add-new-feedback d-block d-md-none'}> {feedback ? 'Save Changes' : 'Add Feedback'}</button>

                        </div>
                    </div>
                </form>
            </div>

        </div>
    </section>
}