import {
    POSTS_CREATE,
    POSTS_GET_DETAILS,
    POSTS_GET_LIST,
} from './posts.actionsTypes';

export const listPost = {
    start: (payload) => {
        return {
            type: POSTS_GET_LIST.START,
            payload,
        }
    },
    success: (data) => {
        return {
            type: POSTS_GET_LIST.SUCCESS,
            payload: data
        }
    },
    canceled: (error) => {
        return {
            type: POSTS_GET_LIST.CANCEL,
            error: error
        }
    },
    error: (error) => {
        return {
            type: POSTS_GET_LIST.ERROR,
            error: error
        }
    },
};

export const detailPost = {
    start: (payload) => {
        return {
            type: POSTS_GET_DETAILS.START,
            payload,
        }
    },
    success: (data) => {
        return {
            type: POSTS_GET_DETAILS.SUCCESS,
            payload: data
        }
    },
    canceled: (error) => {
        return {
            type: POSTS_GET_DETAILS.CANCEL,
            error: error
        }
    },
    error: (error) => {
        return {
            type: POSTS_GET_DETAILS.ERROR,
            error: error
        }
    },
};