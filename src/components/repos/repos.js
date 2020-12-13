import React from 'react'
import Repositem from "./repositem/repositem"
import "./repos.scss"
export default function repos({repos}) {
    // const {repos} = props
    
    return  repos.map(repo=> <Repositem repo={repo} key={repo.id}></Repositem>);
    
}
