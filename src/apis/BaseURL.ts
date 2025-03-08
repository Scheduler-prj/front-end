import axios from "axios";

// const baseURL = process.env.REACT_APP_BASEURL;

export const api = axios.create({
    baseURL : process.env.REACT_APP_BASEURL,
    withCredentials : true,
});