import { all, call, put, takeLatest } from "redux-saga/effects"
import { getPostData } from "../api/postApi"
import { getPostFailure, getPostSuccess } from "./actions"
import POST_PAGE_CONSTANTS from "./constant"



export function* getPostRequest(action) {

    try {
        const response = yield call(getPostData,action.data)
        yield put(getPostSuccess(response))
        
    } catch (error) {
        yield put(getPostFailure(error))
    }
}


export default function* watchPostRequest() {   
    yield all([
        takeLatest(POST_PAGE_CONSTANTS.GET_POSTS_REQUEST,getPostRequest),
    ])
}