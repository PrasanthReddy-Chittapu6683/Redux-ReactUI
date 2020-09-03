import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'



function AsyncUserContainer({ userData, fetchUsers }) {


    useEffect(() => {
        fetchUsers()
         
    },[])


    return userData.loading ? (<h1>Loading .... </h1>) : userData.error ? (<h2>userData.error</h2>) : (
        <div>
            <h3>User List</h3>
            <div>
                {userData && userData.users && userData.users.map(user => <p key={user.name}>{user.name}</p>)}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncUserContainer)
