import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers_action_dispatcher } from '../Redux'



function AsyncUserContainer({ userData, fetchUser_comp_props, ownpropsdata }) {


    useEffect(() => {
        fetchUser_comp_props()

    }, [fetchUser_comp_props])


    return userData.loading ? (<h1>Loading .... </h1>) : userData.error ? (<h2>userData.error</h2>) : (
        <div>
            <h3>User List - (This is ownProps data added in App.js {'>>>>>>'} {ownpropsdata}</h3>
            <button onClick={() => fetchUser_comp_props()}>Refersh Data</button>
            <div>
                {userData && userData.users && userData.users.map(user => <p key={user.name}>{user.name}</p>)}
            </div>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => {
    debugger;

    return {
        userData: state.user,
        ownpropsdata: ownProps.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser_comp_props: () => dispatch(fetchUsers_action_dispatcher()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncUserContainer)
