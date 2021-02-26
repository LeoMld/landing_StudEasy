import React, {useState} from 'react';
import { useInput } from './hooks/input-hook';

import {
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Button, Form
} from "reactstrap";
import classnames from "classnames";

import Axios from "axios";

function Registration() {

    // UI
    const [emailFocused, setEmailFocused] = useState(false);
    const [nameFocused, setNameFocused] = useState(false);
    const [firstnameFocused, setFirstnameFocused] = useState(false);

    // Form text fields
    const { value:email, bind:bindEmail, reset:resetEmail } = useInput('');
    const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
    const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const registrationInfo = {
            email,
            lastName,
            firstName
        }

        Axios.post('/api/registration', registrationInfo)
            .then(res => {
                console.log(res.data.message);
            })
        resetEmail()
        resetFirstName()
        resetLastName()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup
                className={classnames("mt-5",{
                    focused: emailFocused
                })}
            >
                <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-email-83" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Adresse Mail"
                        type="email"
                        {...bindEmail}
                        onFocus={e => setEmailFocused(true)}
                        onBlur={e => setEmailFocused(false)}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup
                className={classnames({
                    focused: nameFocused
                })}
            >
                <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-user-run" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Nom"
                        type="text"
                        {...bindLastName}
                        onFocus={e => setNameFocused(true)}
                        onBlur={e => setNameFocused(false)}
                    />
                </InputGroup>
            </FormGroup>
            <FormGroup
                className={classnames({
                    focused: firstnameFocused
                })}
            >
                <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="ni ni-user-run" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input
                        placeholder="Prénom"
                        type="text"
                        {...bindFirstName}
                        onFocus={e => setFirstnameFocused(true)}
                        onBlur={e => setFirstnameFocused(false)}
                    />
                </InputGroup>
            </FormGroup>
            <div>
                <Button
                    block
                    className="btn-round"
                    color="default"
                    size="lg"
                    type="submit"
                >
                    Pré-Inscription
                </Button>
            </div>
        </Form>
    );
}

export default Registration;