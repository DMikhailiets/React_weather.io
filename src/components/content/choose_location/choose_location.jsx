import React from 'react'
import { Checkbox, Button } from 'antd';
import { Field, reduxForm } from "redux-form";
import style from './choose_location.module.css'
import {requiredField} from '../../../utils/validation'
import AntdCheckbox from '../../common/antd/antd_checkbox/antd_checkbox';
import AntdButton from '../../common/antd/antd_button/antd_button';

const ChooseLocation = (props)=> {
    console.log(props)
    return(
        <div>
            <form  validate={[requiredField]}className={style.location_form} onSubmit={props.handleSubmit}>
                <Field label="London" name="London" id="London" component={AntdCheckbox} type="checkbox"> London </Field>
                <Field label="NewYourk" name="NewYourk" id="NewYourk" component={AntdCheckbox} type="checkbox"> NewYourk </Field>
                <Field label="Moscow" name="Moscow" id="Moscow" component={AntdCheckbox} type="checkbox"> Moscow </Field>
                <Field label="Saint-Petersbourg" name="Saint-Petersbourg" id="Saint-Petersbourg" component={Checkbox} type="checkbox"> Saint-Petersbourg </Field>
                <Field label="Berlin" name="Berlin" id="Berlin" component={AntdCheckbox} type="checkbox"> Berlin </Field>
                <Field label="Madrid" name="Madrid" id="Madrid" component={AntdCheckbox} type="checkbox"> Madrid </Field>
                <AntdButton type="primary" textButton='Submit' htmlType="submit" style={{ marginRight: "10px" }}/>
            </form>
        </div>
    )
}

 

 export default reduxForm({
    form: 'locationForm'
})(ChooseLocation)