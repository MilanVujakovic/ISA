import React from 'react'
import styled from 'styled-components';
import { StyledButton, StyledTab } from '../../assets/styles';

const MultiStepForm = (props: MultiStepFormProps) => {
    const { progressLine, showStep } = props;
    return (
        <StyledMultiStepForm>
            { progressLine && progressLine }
            <StyledTab height="40vh">
                <StyledSignupForm method="POST" noValidate>
                    { props.children[showStep - 1] }
                </StyledSignupForm>
            </StyledTab>
        </StyledMultiStepForm>
    );
};

export const FormStep = (props: FormStepProps) => {
    const { backText, onBack, forwardText, onForward, disableOnForward } = props;
    const hasBack = backText ? true : false;
    return (
        <React.Fragment>
            <StyledFormStep>
                    {/* --- Inputs --- */}
                    { props.children }
            </StyledFormStep>
            <StyledButtons>
                {
                    hasBack && 
                    <React.Fragment>
                        <StyledButton onClick={ onBack }>
                            { backText }
                        </StyledButton>
                        <span></span>
                    </React.Fragment>
                }
                
                <StyledButton onClick={ onForward } disabled={ disableOnForward }>
                    { forwardText }
                </StyledButton>
            </StyledButtons>
        </React.Fragment>
    )
};

const StyledMultiStepForm = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`
const StyledFormStep = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    justify-content: space-around;
    align-items: center;
`

const StyledSignupForm = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledButtons = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    span {
        width: 1px;
        background-color: ${ props => props.theme.colors.secondary.dark }
    }
`

interface MultiStepFormProps {
    progressLine?: object
    className?: string
    showStep: number
    children: React.ReactNodeArray
}

interface FormStepProps {
    backText?: string
    onBack?: React.MouseEventHandler
    forwardText: string
    onForward: React.MouseEventHandler
    disableOnForward?: boolean
    children: React.ReactNodeArray
}

export default MultiStepForm;