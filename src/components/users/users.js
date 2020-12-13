import React , {useContext} from 'react'
import UserItem from "./Useritem"
import Spinner from "../layout/Spinner"
import GithubContext from '../../context/github/githubContext'

const Users=() => {
    const githubContext = useContext(GithubContext);
    const {users,loading} = githubContext
    if(loading){
        return <Spinner></Spinner>
    }else{
        return(
            <div style={usersStyle}>
                {
                    users.map(user=>(
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
        )
    }
}

export default Users

const usersStyle={
    width:'70%',
    margin:'auto',
    marginTop: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
}
