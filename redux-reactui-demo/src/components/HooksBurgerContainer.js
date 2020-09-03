import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBurger } from '../Redux'

function HooksBurgerContainer() {
    const numOfBurgers = useSelector(state => state.burger.numOfBurgers)
    const myDispatch = useDispatch()
    return (
        <div>
            <h2> Num of Burgers - {numOfBurgers}</h2>
            <button onClick={() => myDispatch(buyBurger())}>Buy Burgers using Hooks</button>
        </div>
    )
}

export default HooksBurgerContainer
