import React from 'react'
import { buyIceCream } from '../Redux'
import { connect } from 'react-redux'


function IceCreamContainer(props) {
    return (
        <div>
            <h2>No of IceCreams : {props.numOfIceCremas}</h2>
            <button onClick={props.buyIceCream}> Click on Buy IceCremas</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCremas: state.iceCream.numOfIceCremas
    }
}


const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(IceCreamContainer)
