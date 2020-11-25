import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Forms/Login';

function Login() {
    return (
        <StyledLogin>
            <LoginTab>
                <LoginForm />
                <StyledLoginFooter>
                    <Link to="/signup">Forgot password?</Link>
                    <div>
                        <span>Don't have an account?</span>
                        &nbsp;
                        <Link to="/signup">Sign up</Link>
                    </div>
                </StyledLoginFooter>
            </LoginTab>
        </StyledLogin>
    )
}

const StyledLogin = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.colors.common.whiteShade };
`

const LoginTab = styled.div`
    width: 25%;
    margin: auto;
`

const StyledLoginFooter = styled.div`
    min-height: 5rem;
    text-align: center;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
        color: ${ props => props.theme.colors.secondary.main };
        :hover {
            color: ${ props => props.theme.colors.secondary.light };
        }
    }
`

export default Login
