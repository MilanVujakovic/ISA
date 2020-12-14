import React, { useState, useEffect, ChangeEventHandler, MouseEventHandler } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm'
import { loginUser } from '../../../redux/actions/userActions';
import { clearErrors } from '../../../redux/actions/uiActions';
import { RootState } from '../../../redux/store';

interface errorMessages {
    errors: {
        email: string
        password: string
    }
}
const LoginFormContainer = ({ history }: any) => {
    const dispatch = useDispatch();
    const { errors }: errorMessages = useSelector((state: RootState) => state.UI);
    
    //const errors = { email: "", password: ""}
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault();
        if(errors.email !== "" || errors.password !== "") dispatch(clearErrors());
        const value = event.target.value;
        switch (event.target.id) {
            case 'email':
                setEmail(value);
                break;
        
            case 'password':
                setPassword(value);
                break;
        }
        console.log(errors)
    };

    const handleLogin: MouseEventHandler = (event) => {
        event.preventDefault();

        const user = {
            email,
            password
        }
        
        dispatch(loginUser(user, history));
    };

    useEffect(() => {

        return () => {
            // unmount things
            dispatch(clearErrors());
        }
    // eslint-disable-next-line
    }, []);

    return (
        <LoginForm 
            email={ email }
            password={ password }
            handleChange={ handleChange }
            handleLogin={ handleLogin }
            errors={ errors }
        />
    );
};

export default LoginFormContainer
