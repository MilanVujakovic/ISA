import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { StyledTab, StyledButton } from '../../../assets/styles';

const LoginForm = (props: LoginFormContentProps) => {
    const handleLogin = props.handleLogin;
    return (
        <StyledTab height="30vh">
            <LoginFormContent 
                { ...props }
            />
            <StyledButton onClick={ handleLogin }>Log in</StyledButton>
        </StyledTab>
    )
}

interface LoginFormContentProps {
    email: string
    password: string
    isLoading?: boolean
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleLogin: React.MouseEventHandler
    errors: {
        email: string
        password: string
    }
    className?: string
}

const LoginFormContent: React.FC<LoginFormContentProps> = (props) => {
    const { email, password, handleChange, errors, isLoading } = props;
    return (
        <StyledLoginFormContent method='POST'>
            <TextField
                label="Email"
                name="email"
                type="email" 
                id="email"
                value={ email }
                color="secondary"
                inputProps={{ maxLength: 64 }}
                onChange={ handleChange }
                error={ errors.email ? true : false }
                helperText={ errors.email || '' }
                fullWidth
                autoFocus 
                required
            />
            <TextField 
                label="Password"
                name="password" 
                type="password" 
                id="password"
                value={ password }
                color="secondary"
                inputProps={{ maxLength: 64 }}
                onChange={ handleChange }
                error={ errors.email ? true : false }
                helperText={ errors.email || '' }
                fullWidth
                required
            />
        </StyledLoginFormContent>
    );
};

const StyledLoginTitle = styled.h1`
    flex: 1;
    margin: 0;
    text-align: center;
    color: ${ props => props.theme.colors.secondary.main };
`

const StyledLoginFormContent = styled.form`
    flex: 5;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    justify-content: space-around;
    align-items: center;
`

export default LoginForm
