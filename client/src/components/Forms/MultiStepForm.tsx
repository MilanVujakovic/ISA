import React from 'react'
import styled from 'styled-components';
import { StyledButton, StyledTab } from '../../assets/styles';

const MultiStepForm = (props: MultiStepFormProps) => {
    const { progressLine, showStep } = props;
    return (
        <StyledMultiStepForm>
            { progressLine && progressLine }
            <StyledTab height="45vh">
                <StyledSignupForm method="POST" noValidate>
                    { props.children[showStep - 1] }
                </StyledSignupForm>
            </StyledTab>
        </StyledMultiStepForm>
    );
};

export const FormStep = (props: FormStepProps) => {
    const { title, backText, onBack, forwardText, onForward, disableOnForward } = props;
    const hasBack = backText ? true : false;
    return (
        <React.Fragment>
            <StyledFormStep>
                    <StyledStepTitle>{ title }</StyledStepTitle>
                    {/* --- Inputs --- */}
                    <StyledInputs>
                    { props.children }
                    </StyledInputs>
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
    min-width: 35vh;
    max-width: 35vh;
    flex: 5;
    display: flex;
    flex-direction: column;
    margin: 2rem;
    justify-content: flex-start;
    align-items: center;
`
const StyledInputs = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
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

const StyledStepTitle = styled.h1`
    margin: 0;
    text-align: center;
    color: ${ props => props.theme.colors.common.font };
`

interface MultiStepFormProps {
    progressLine?: object
    className?: string
    showStep: number
    children: React.ReactNodeArray
}

interface FormStepProps {
    title?: string
    backText?: string
    onBack?: React.MouseEventHandler
    forwardText: string
    onForward: React.MouseEventHandler
    disableOnForward?: boolean
    children: React.ReactNodeArray
}

export default MultiStepForm;