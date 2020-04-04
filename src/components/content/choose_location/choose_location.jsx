import React from 'react'
import { Checkbox, Button, Form } from 'antd';
import { Field, reduxForm } from "redux-form";
import style from './choose_location.module.css'

const ChooseLocation = (props)=> {
        console.log(props)
        return(
            <div>
                <Form className={style.location_form} onSubmit={props.handleSubmit}>
                    <Field label="London" name="London" id="London" component={Checkbox} type="checkbox"> London </Field>
                    <Field label="NewYourk" name="NewYourk" id="NewYourk" component={Checkbox} type="checkbox"> NewYourk </Field>
                    <Field label="Moscow" name="Moscow" id="Moscow" component={Checkbox} type="checkbox"> Moscow </Field>
                    <Field label="Saint-Petersbourg" name="Saint-Petersbourg" id="Saint-Petersbourg" component={Checkbox} type="checkbox"> Saint-Petersbourg </Field>
                    <Field label="Berlin" name="Berlin" id="Berlin" component={Checkbox} type="checkbox"> Berlin </Field>
                    <Field label="Madrid" name="Madrid" id="Madrid" component={Checkbox} type="checkbox"> Madrid </Field>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }}> Submit </Button>
                </Form>
            </div>
        )

}

 

export default reduxForm({
    form: 'locationForm'
})(ChooseLocation)