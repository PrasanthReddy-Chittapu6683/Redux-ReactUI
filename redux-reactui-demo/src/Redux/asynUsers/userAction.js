import {
    FETCH_USERS_REQUEST_ACTION_TYPE,
    FETCH_USERS_SUCCESS_ACTION_TYPE,
    FETCH_USERS_FAILURE_ACTION_TYPE
} from './userType'
import axios from 'axios'


export const fetchUsersRequestAction = () => {
    return {
        type: FETCH_USERS_REQUEST_ACTION_TYPE,
        payload: true
    }
}

export const fetchUsersSuccessAction = (users) => {
    return {
        type: FETCH_USERS_SUCCESS_ACTION_TYPE,
        payload: users
    }
}

export const fetchUsersFailureAction = (error) => {
    return {
        type: FETCH_USERS_FAILURE_ACTION_TYPE,
        payload: error
    }
}

export const fetchUsers_action_dispatcher = () => {
    return (dispatchReducer) => {
        dispatchReducer(fetchUsersRequestAction)

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatchReducer(fetchUsersSuccessAction(users))

            })
            .catch(error => {
                const errorMsg = error.message
                dispatchReducer(fetchUsersFailureAction(errorMsg))
            })


    }
}