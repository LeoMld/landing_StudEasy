import React, {useState} from 'react';

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

    const [emailFocused, setEmailFocused] = useState(false);
    const [nameFocused, setNameFocused] = useState(false);
    const [firstnameFocused, setFirstnameFocused] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.get("/api/test")
            .then(res => {
                console.log(res.data.message);
            });
    }

    return (
        <Form>
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
                    type="button"
                    onClick={handleSubmit}
                >
                    Pré-Inscription
                </Button>
            </div>
        </Form>
    );
}

export default Registration;