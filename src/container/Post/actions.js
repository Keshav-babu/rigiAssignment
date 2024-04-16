import POST_PAGE_CONSTANTS from "./constant";

export const getPost= (data) => ({
    type: POST_PAGE_CONSTANTS.GET_POSTS_REQUEST,
    data,
});

export const getPostSuccess = (data) => ({
    type: POST_PAGE_CONSTANTS.GET_POSTS_SUCCESS,
    data,
});

export const getPostFailure = (data) => ({
    type: POST_PAGE_CONSTANTS.GET_POSTS_FAILURE,
    data,
})