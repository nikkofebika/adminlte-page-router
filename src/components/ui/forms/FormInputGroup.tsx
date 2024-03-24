import React from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap'

const FormInputGroup = ({ label, name, type, placeholder, icon }: any) => {
    return (
        <Form.Group controlId="validationCustomUsername">
            {
                label && <Form.Label htmlFor={name}>
                    {label}
                </Form.Label>
            }
            <InputGroup className="mb-2">
                <FormControl name={name} type={type} id={name} placeholder={placeholder} />
                <InputGroup.Append>
                    <InputGroup.Text>{icon}</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </Form.Group>
    )
}

export default FormInputGroup