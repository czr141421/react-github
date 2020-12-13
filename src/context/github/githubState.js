import React,{useReducer} from "react"
import axios from "axios"
import GithubCoontext from "./githubContext"
import GithubReducer from "./githubReducer"
import { GET_SEAR_INFO,GET_USER,GET_USER_REPOS,CLEAR_SEARCH,SET_LOADING,SEARCH_USERS } from "../types"

const GithubState=props=>{
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState)

    const searchUser=async (text)=>{
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // setUsers(res.data.items)

        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items
        })
    }

    const setLoading = () => dispatch({type:SET_LOADING})

    const clearSearch=() => dispatch({type:CLEAR_SEARCH})
    
    const getUser=async (login)=>{
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type:GET_USER,
            payload:res.data
        })
    }

    const getUserRepos=async (login)=>{
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // this.setState({repos:res.data,loading:false})
        // setRepos(res.data)
        dispatch({
            type:GET_USER_REPOS,
            payload:res.data
        })
    }

    return(
        <GithubCoontext.Provider
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUser,
            clearSearch,
            getUser,
            getUserRepos
        }}
        >
            {props.children}

        </GithubCoontext.Provider>
    )
}

export default GithubState