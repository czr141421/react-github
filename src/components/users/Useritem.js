import "./Useritem.scss";
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

const Useritem=({user:{login,avatar_url,html_url}}) => {
    return (
            <div className="useritem">
                {/* <div className="user_sign"> */}
                    <div className="img">
                        <img alt="user" src={avatar_url} style={{width:'100px'}}></img>
                    </div>
                    <span>{login}</span>
                    <Link to={`/user/${login}`}>more</Link>
                {/* </div> */}
            </div>
        )
};

Useritem.propTypes = {
    user:PropTypes.object.isRequired
}

export default Useritem;
