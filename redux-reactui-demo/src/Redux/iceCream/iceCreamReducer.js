import { BUY_ICECREAM } from './iceCreamType'

const initialState = {
    numOfIceCremas: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCremas: state.numOfIceCremas - 1
            }

        default:
            return state
    }
}

export default iceCreamReducer