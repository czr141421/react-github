import React from 'react'
import "./repositem.scss"
import { Divider } from 'antd';
export default function repositem({repo}) {
    return (
        <div className="repositem">
            <Divider plain>url</Divider>
            {repo.archive_url}
        </div>
    ); 
}
