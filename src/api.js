import axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYXltZXJhcHZAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ0aGF5bWVyYXB2IiwiaWF0IjoxNjM4NjgzNjI4fQ.g-IGh7bh2lR0UpJbi04R_NivqiIo8b1zy8Bk0NqXD_Y'

export const getCategories = async () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/categories/`, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const getFeedbacks = (query) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/feedback/`, {
        headers: {Authorization: `Bearer ${token}`},
        params: query
    })
}

export const addNewFeedback = (data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/feedback`, {
        ...data,
    }, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const getFeedback = (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/feedback/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const updateFeedback = (id, data) => {
    return axios.patch(`${process.env.REACT_APP_API_URL}/feedback/${id}`, data, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const deleteFeedback = (id) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}/feedback/${id}`, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const creteComment = (id, data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/feedback/${id}/comment`, {
        ...data,
    }, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const createReplyForPost = (id, idc, data) => {
    return axios.post(`${process.env.REACT_APP_API_URL}/feedback/${id}/comment/${idc}/reply`, {
        ...data,
    }, {
        headers: {Authorization: `Bearer ${token}`}
    })
}

export const getFeedbacksStatus = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/feedback/status`, {
        headers: {Authorization: `Bearer ${token}`}
    })
}