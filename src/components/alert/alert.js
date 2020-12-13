import React ,{useContext} from 'react';
import "./alert.scss";
import AlertContext from "../../context/alert/alertContext"
const Alert=() => {
    const alertContext = useContext(AlertContext);
    const {alertMsg} = alertContext;
    return (
        alertMsg!==null && (
            <div className={`alert ${alertMsg.type}`}>
                {alertMsg.msg}
            </div>
        )
    )
}

export default Alert;