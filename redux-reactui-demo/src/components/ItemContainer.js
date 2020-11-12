import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../Redux'
function ItemContainer(props) {
    return (
        <div>
            <h1>Item Container</h1>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items - ({props.Name})</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCremas
    const itemName = ownProps.cake ? 'Cake' : 'Ice Cream'
    return {
        item: itemState,
        Name: itemName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunc = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunc
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
