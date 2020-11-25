import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

function LoginForm() {
    return (
        <StyledTab>
            <StyledLoginFormContent 
                email=""
                password=""
            />
            <StyledButton>Log in</StyledButton>
        </StyledTab>
    )
}

interface ILoginFormContent {
    email: string
    password: string
    isLoading?: boolean
    onChange?: Function
    onLogin?: Function
    errors?: string
    className?: string
}

const LoginFormContent: React.FC<ILoginFormContent> = (props) => {
    const { className, email, password, onChange, errors, onLogin, isLoading } = props;
    return (
        <div className={ className }>
            <TextField
                label="Email"
                name="email"
                type="email" 
                id="email"
                value={ email }
                color="secondary"
                inputProps={{ maxLength: 64 }}
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
                fullWidth
                required
            />
        </div>
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

const StyledLoginFormContent = styled(LoginFormContent)`
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
