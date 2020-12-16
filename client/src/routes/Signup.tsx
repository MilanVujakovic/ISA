import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignupForm from '../components/Forms/Signup';
import { StyledFormFooter } from '../assets/styles';

function Signup() {
    return (
        <StyledSignup>
            <StyledSignupTab>
                <SignupForm />
                <StyledFormFooter>
                    <Link to="/signup">Forgot password?</Link>
                    <div>
                        <span>Have an account?</span>
                        &nbsp;
                        <Link to="/login">Log in</Link>
                    </div>
                </StyledFormFooter>
            </StyledSignupTab>
        </StyledSignup>
    )
}

const StyledSignup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.colors.common.whiteShade };
`

const StyledSignupTab = styled.div`
    width: 100%;
    margin: auto;
`

export default Signup
