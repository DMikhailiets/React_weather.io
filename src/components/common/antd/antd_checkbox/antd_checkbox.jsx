import React from 'react'
import { Checkbox } from 'antd'

const AntdCheckbox = ({input, meta, ...props}) => {
    return (
        <div>
            <Checkbox {...input} {...props} type='checkbox'/>
        </div>
    )
}

export default AntdCheckbox;