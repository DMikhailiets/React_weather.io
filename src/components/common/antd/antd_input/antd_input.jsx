import React from 'react'
import { Input } from 'antd'

const AntdInput = ({input, meta, ...props}) => {
    return (
        <div>
            <Input {...input} {...props}/>
        </div>
    )
}

export default AntdInput