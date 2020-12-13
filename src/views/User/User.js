import React, { useEffect,useContext } from 'react';
import {Link} from "react-router-dom";
import Repos from "../../components/repos/repos"
import Spinner from "../../components/layout/Spinner";
import "./User.scss";
import GithubContext from "../../context/github/githubContext"

const User = ({match})=> {

    const githubContext = useContext(GithubContext)
    const {user,getUser,loading,getUserRepos,repos} = githubContext

    useEffect(()=>{
        getUser(match.params.user)
        getUserRepos(match.params.user)
    },[])

    const { login,name,hireable,avatar_url,location,bio,company,url } = user
    if (loading) return <Spinner/>
    return (
        <div className="user">
            <div className="user_top">
                <Link to="/">返回</Link> 
                <div>
                    <span>是否在职 </span>
                    {
                        hireable?(
                            <i className="fa fa-check"></i>
                        ):(
                            <i className="fa fa-close"></i>
                        )
                    }
                </div>
            </div>
            <div className="user_content">
                <div className="user_cont_lef">
                    <img src={avatar_url}></img>
                    <span>{login}</span>
                    <span>所在地：{location}</span>
                </div>
                <div className="user_cont_rig">
                    <div className="brief">
                        <span>个人简介</span>
                        <span>斤斤计较军军军军军军军军军军少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所</span>
                    </div>
                    <div className="visit">
                        <button>访问</button>
                    </div>
                    <div className="company_web">
                        <span>公司：{company}</span>
                        <span>网址：{url}</span>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </div>
    )
}

export default User