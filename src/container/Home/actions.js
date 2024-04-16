import HOME_PAGE_CONSTANTS from "./constant";


export const getAllUsers = (data) => ({
    type: HOME_PAGE_CONSTANTS.GET_ALL_USERS_REQUEST,
    data,
});

export const getAllUsersSuccess = (data) => ({
    type: HOME_PAGE_CONSTANTS.GET_ALL_USERS_SUCCESS,
    data,
});

export const getAllUsersFailure = (data) => ({
    type: HOME_PAGE_CONSTANTS.GET_ALL_USERS_FAILURE,
    data,
});

export const getAllPosts = (data) => ({
    type: HOME_PAGE_CONSTANTS.GET_ALL_POSTS_REQUEST,
    data,
});

export const getAllPostsSuccess = (data) => ({
    type: HOME_PAGE_CONSTANTS.GET_ALL_POSTS_SUCCESS,
    data,
});

export const getAllPostsFailure = (data) => ({
    type: HOME_PAGE_CONSTANTS.GET_ALL_POSTS_FAILURE,
    data,
}); 



export const clearPost=()=>({
    type:HOME_PAGE_CONSTANTS.CLEAR_ALL_POSTS,
})