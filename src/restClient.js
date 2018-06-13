import axios from 'axios';
import { Observable } from 'rxjs';
import { BACKEND_URL } from "./constanst";

const restClient = {
  get: (api) => {
    const optionsGet = options(api);
    optionsGet.method = 'GET';
    return Observable.fromPromise(
      axios(optionsGet)
        .then(
          (rp) => {
            return rp;
          },
          ({ response }) => {
            return {
              status: response.status,
              message: response.statusText
            };
          }
        )
        .catch(err => err)
    );
  },
  post: (api, data) => {
    const optionsPost = options(api);
    optionsPost.method = 'POST';
    optionsPost.data = data;
    return Observable.fromPromise(
      axios(optionsPost)
        .then(
          (rp) => {
            return rp;
          },
          ({ response }) => {
            return {
              status: response.status,
              message: response.statusText
            };
          }
        )
        .catch(err => err)
    );
  },
  patch: (api, data) => {
    const optionsPost = options(api);
    optionsPost.method = 'PATCH';
    optionsPost.data = data;
    return Observable.fromPromise(
      axios(optionsPost)
        .then(
          (rp) => {
            return rp;
          },
          ({ response }) => {
            return {
              status: response.status,
              message: response.statusText
            };
          }
        )
        .catch(err => err)
    );
  },
  delete: (api, data) => {
    const optionsDelete = options(api);
    optionsDelete.method = 'DELETE';
    return Observable.fromPromise(
      axios(optionsDelete)
        .then(
          (rp) => {
            return rp;
          },
          ({ response }) => {
            return {
              status: response.status,
              message: response.statusText
            };
          }
        )
        .catch(err => err)
    );
  },
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