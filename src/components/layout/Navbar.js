import {Link} from "react-router-dom"
import React from 'react'
import PropTypes from 'prop-types'
import "./Navbar.scss"

const Navbar=({icon,title})=>{
    return (
        <div className="head">
            <div className="head_lef">
                <i className={icon}></i> 
                <span>{title}</span>
            </div>
            <div className="head_rig">
                <Link to="/about">About</Link>
                <Link to="/">App</Link>
            </div>
        </div>
    )
}

Navbar.propTypes={
    icon:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default Navbar
