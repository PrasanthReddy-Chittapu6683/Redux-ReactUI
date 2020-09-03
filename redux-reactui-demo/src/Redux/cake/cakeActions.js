
import { BUY_CAKE, RESET_CAKE } from './cakeTypes'

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payloadNumber: number
    }
}

export const resetCake = (resetNum) => {
    return {
        type: RESET_CAKE,
        payloadNumber: resetNum
    }
}