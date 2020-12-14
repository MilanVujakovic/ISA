import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const LoginForm: React.FC<ILoginFormContent> = (props: ILoginFormContent) => {
    const handleLogin = props.handleLogin;
    return (
        <StyledTab>
            <LoginFormContent 
                { ...props }
            />
            <StyledButton onClick={ handleLogin }>Log in</StyledButton>
        </StyledTab>
    )
}

interface ILoginFormContent {
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

const LoginFormContent: React.FC<ILoginFormContent> = (props) => {
    const { email, password, handleChange, errors, isLoading } = props;
    return (
        <StyledLoginFormContent>
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

const StyledTab = styled.div`
    display: flex;
    flex-direction: column;
    height: 30vh;
    box-shadow: 0 0.1rem 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: ${ props => props.theme.borderRadius };
    background-color: #fff;
    overflow: hidden;
`

const StyledLoginTitle = styled.h1`
    flex: 1;
    margin: 0;
    text-align: center;
    color: ${ props => props.theme.colors.secondary.main };
`

const StyledLoginFormContent = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    justify-content: space-around;
    align-items: center;
`

const StyledButton = styled.button`
    flex: 1.5;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    color: ${ props => props.theme.colors.secondary.contrastText };
    background-color: ${ props => props.theme.colors.secondary.main };

    :hover {
        background-color: ${ props => props.theme.colors.secondary.light };
    }
`


export default LoginForm
