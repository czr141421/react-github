import React, { useState ,useContext} from 'react'
import PropTypes from 'prop-types'
import "./search.scss"
import AlertContext from  "../../context/alert/alertContext"
import GithubContext from "../../context/github/githubContext"
const Search =() => {
    const alertContext = useContext(AlertContext)
    const githubContext = useContext(GithubContext)
    const [text, setText] = useState("");
    
    const onChange=e=>{
        setText(e.target.value)
    }
    // 回车
    const enterSearch=(e)=>{
        if(e.code==="Enter"){
           getSearch()
        }
    }
    // 搜索
    const getSearch=()=>{
        if(text){
            githubContext.searchUser(text)
            setText('')
        }else{
            alertContext.alertWarn('place search something','red')
        }
    }

    return (
        <div className="search">
            <input
                placeholder="请输入搜索内容"
                value={text}
                name="text"
                onKeyUp={enterSearch}
                onChange={onChange}
                >
            </input>
            <div className="searchBtn" onClick={getSearch}>
                Search
            </div>
            {githubContext.users.length>0 && (
                <div className="searchBtn" onClick={githubContext.clearSearch}>Clear</div>
            )}
        </div>
    )
    
}

export default Search
