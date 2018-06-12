import axios from 'axios';
import {BACKEND_URL} from "./constanst";

const restClient = axios.create({
    baseURL: BACKEND_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        crossDomain: true,
    }
});

export {
    restClient
};