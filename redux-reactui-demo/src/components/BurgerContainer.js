import React from 'react'
import { buyBurger } from '../Redux'
import { connect } from 'react-redux'

function BurgerContainer(props) {
    return (
        <div>
            <h2>Num of Buger - {props.numOfBurgers}</h2>
            <button onClick={props.buyBurger}>Buy Burger</button>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfBurgers: state.burger.numOfBurgers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBurger: () => dispatch(buyBurger())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BurgerContainer)
