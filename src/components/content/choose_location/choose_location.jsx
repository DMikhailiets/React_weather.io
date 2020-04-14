import React from 'react'
import { Field, reduxForm } from "redux-form";
import style from './choose_location.module.css'
import AntdButton from '../../common/antd/antd_button/antd_button';
import AntdInput from '../../common/antd/antd_input/antd_input';

const ChooseLocation = (props)=> {

    return(
        <div> 
            <form  className={style.location_form} onSubmit={props.handleSubmit}>
                <Field label="Location" name="Location" id="Location" component={AntdInput} type="input"/>
                <AntdButton type="primary" textbutton='Submit' htmlType="submit" style={{ marginRight: "10px" }}/>
            </form>
        </div>
    )
}

 

 export default reduxForm({
    form: 'locationForm'
})(ChooseLocation)