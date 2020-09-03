import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, resetCake } from '../Redux'

function NewCakeContainer(props) {

    const [NumberCnt, setNumberCnt] = useState(1)
    const resetClick = 10
    const resetClickFun = () => {
        setNumberCnt(1)
        props.resetCake(resetClick)
    }
    const buyCakeFun = () => {
        if (NumberCnt > 10) {
            alert('No Stock')
            setNumberCnt(1)
            props.resetCake(resetClick)
        } else {
            props.buyCake(NumberCnt)
        }
    }

    return (
        <div>
            <h2>Num Of Cakes: {props.numOfCakes}</h2>
            <input type='text' value={NumberCnt} onChange={e => setNumberCnt(e.target.value)}></input>
            <button onClick={buyCakeFun}>Buy {NumberCnt} Cake</button>
            <button onClick={resetClickFun}>Reset</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyCake: (NumberCnt) => dispatch(buyCake(NumberCnt)),
        resetCake: (resetnum) => dispatch(resetCake(resetnum))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
