import axios from 'axios';
import {BACKEND_URL} from "./constanst";

const restClient = {
    get: (api) => {
        const optionsGet = options(api);
        optionsGet.method = 'GET';
        return axios(optionsGet)
    }
}

function options(api) {
    return {
        url: BACKEND_URL + api,
        headers: {
            'Access-Control-Allow-Origin': '*',
            crossDomain: true,
        }
    };
}

export {
    restClient
};