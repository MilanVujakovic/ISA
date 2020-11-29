import React, { useState, useEffect, MouseEvent, ChangeEventHandler, MouseEventHandler } from 'react';

import LoginForm from './LoginForm'

const LoginFormContainer = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        const value = event.target.value;
        switch (event.target.id) {
            case 'email':
                setEmail(value);
                break;
        
            case 'password':
                setPassword(value);
                break;
        }
    };

    const handleLogin: MouseEventHandler = (event) => {
        console.log('log in')
    };

    useEffect(() => {

        return () => {
            // unmount things
        }
    });

    return (
        <LoginForm 
            email={ email }
            password={ password }
            handleChange={ handleChange }
            handleLogin={ handleLogin }
            errors={{email: "", password: ""}}
        />
    );
};

export default LoginFormContainer
