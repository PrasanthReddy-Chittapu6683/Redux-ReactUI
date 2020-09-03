
import { BUY_CAKE, RESET_CAKE } from './cakeTypes'

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payloadNumber
            }
        case RESET_CAKE:
            return {
                ...state,
                numOfCakes: action.payloadNumber
            }

        default:
            return state
    }
}

export default cakeReducer