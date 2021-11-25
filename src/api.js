import axios from "axios";

export const getProducts = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/product/`)
}

export const getFeedbacks = (idProduct) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/product/${idProduct}/feedback`)
}