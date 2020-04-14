import React from 'react'
import { Button } from 'antd'

const AntdButton = (props) => {
    return (
        <div>
            <Button {...props}> {props.textbutton} </Button>
        </div>
    )
}

export default AntdButton