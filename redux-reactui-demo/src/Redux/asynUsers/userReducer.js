import {
    FETCH_USERS_REQUEST_ACTION_TYPE,
    FETCH_USERS_SUCCESS_ACTION_TYPE,
    FETCH_USERS_FAILURE_ACTION_TYPE
} from './userType'


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST_ACTION_TYPE:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS_ACTION_TYPE:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE_ACTION_TYPE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return { state, loading: true }

    }
}

export default userReducer