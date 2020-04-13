import React from 'react'
import { Button } from 'antd'

const AntdButton = (props) => {
    console.log(props)
    return (
        <div>
            <Button {...props}> {props.textButton} </Button>
        </div>
    )
}

export default AntdButton