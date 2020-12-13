import React,{useReducer} from "react"
import AlertContext from "./alertContext"
import AlertReducer from "./alertReducer"
import { SET_ALERT,REMOVE_ALERT } from "../types"

const AlertState = props =>{
    // 初始化状态
    const initialState = null;
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    //实现方法
    const alertWarn=(msg,type)=>{
        dispatch({
            type:SET_ALERT,
            payload:{msg,type}
        })
        
        setTimeout(() => dispatch({type:REMOVE_ALERT}),2000)
        
        // this.setState({alertMsg:{msg,type}})
        // setTimeout(()=>{
        //   this.setState({alertMsg:null})
        // },2000)
      }

    return (
        <AlertContext.Provider value={{alertMsg:state,alertWarn}}>
            {props.children}
        </AlertContext.Provider>
    )
}


export default AlertState;