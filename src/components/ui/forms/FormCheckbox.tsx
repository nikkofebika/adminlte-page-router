import React from 'react'
import { Form } from 'react-bootstrap'

const FormCheckbox = ({ name, label }: any) => {
    return (
        <div className="icheck-primary">
            <Form.Control type="checkbox" id={name} name={name} />
            <Form.Label htmlFor={name}>
                {label}
            </Form.Label>
        </div>
    )
}

export default FormCheckbox