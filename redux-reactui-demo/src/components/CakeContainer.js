import React from 'react'
import { buyCake } from '../Redux'
import { connect } from 'react-redux'


function CakeContainer(props) {
    return (
        <div>
            <h2>No of Cakes : {props.numOfCakes}</h2>
            <button onClick={props.buyCake}> Click on Buy Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}


const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)  (CakeContainer)