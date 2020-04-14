import React from 'react'
import { Checkbox, Button } from 'antd';
import { Field, reduxForm } from "redux-form";
import style from './choose_location.module.css'
import {requiredField} from '../../../utils/validation'
import AntdCheckbox from '../../common/antd/antd_checkbox/antd_checkbox';
import AntdButton from '../../common/antd/antd_button/antd_button';
import AntdRadio from '../../common/antd/antd_radio/antd_radio';

const ChooseLocationWithRadio = (props)=> {
    
    return(
        <div> 
            <form  validate={[requiredField]} className={style.location_form} onSubmit={props.handleSubmit}>
                <Field label="NewYourk" name="NewYourk" id="NewYourk" component={AntdRadio} type="radio"/> 
            </form>
        </div>
    )
}

 

 export default reduxForm({
    form: 'locationForm'
})(ChooseLocationWithRadio)