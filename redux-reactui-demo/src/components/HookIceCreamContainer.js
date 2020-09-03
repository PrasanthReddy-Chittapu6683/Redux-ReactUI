import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../Redux'
function HookIceCreamContainer() {

    const numOfIceCremas = useSelector(state => state.iceCream.numOfIceCremas)
    const myDispatch = useDispatch()
    return (
        <div>
            <h2>No of IceCreams : {numOfIceCremas}</h2>
            <button onClick={() => myDispatch(buyIceCream())}> Click on Buy IceCremas using Hooks</button>
        </div>
    )
}

export default HookIceCreamContainer
