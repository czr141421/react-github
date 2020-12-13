import React,{Fragment} from 'react'
import Search from "../../components/search/search"
import Users from "../../components/users/users"
export default function Home() {
    return (
        <Fragment>
            <Search></Search>
            <Users></Users> 
        </Fragment>
    )
}
