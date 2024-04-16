import POST_PAGE_CONSTANTS from "./constant";

const initialState={
    isvalue:false,
    posts:[]

}


const postReducer=(state=initialState,action)=>{
    switch(action.type)    {
        case POST_PAGE_CONSTANTS.GET_POSTS_SUCCESS:
            return{
                ...state,
                posts:action.data,
                isvalue:true
        }
        default:
        return {
            ...state
        }
    }
}

export default postReducer;