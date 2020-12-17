import React, { MouseEventHandler, ChangeEventHandler, ChangeEvent, useState } from 'react';
import SignupForm from './SignupForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { validateSignupForm } from '../../../utils/FormValidation';
import { setErrors, clearErrors } from '../../../redux/actions/uiActions';
import { signupUser } from '../../../redux/actions/userActions';

function SignupFormContainer({history}: any) {
    const dispatch = useDispatch();
    const { errors }: AuthErrorMessages = useSelector((state: RootState) => state.UI);
    const FORM_MAX_STEP = 3;
    const [accInfo, setAccInfo] = useState<AccInfo>({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
        firstName: '',
        lastName: ''
    });
    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        country: '',
        postalCode: '',
        phone: '',
        streetAddress: '',
        city: ''
    });
    const userData = {
        ...accInfo,
        ...personalInfo,
        ...contactInfo
    }

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [pastStep, setPastStep] = useState<number>(0);

    const handleForward: MouseEventHandler = (event) => {
        event.preventDefault();
        const validation = validateSignupForm(getCurrentStepData(), currentStep);
        console.log(getCurrentStepData())
        
        if(validation.isValid) {
            if(currentStep === FORM_MAX_STEP) {
                console.log(userData);
                dispatch(signupUser(userData, history));
            } else {
                dispatch(clearErrors());
                setCurrentStep(currentStep + 1);
                setPastStep(pastStep + 1);
            }

            
        } else dispatch(setErrors(validation.errors));
    };

    const handleBack: MouseEventHandler = (event) => {
        event.preventDefault();
        setPastStep(pastStep - 1);
        setCurrentStep(currentStep -1);
    };

    const handleAutocompleteChange: ChangeEventHandler<{}> = (event:ChangeEvent<{}>) => {
        
        console.log(' ')
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setStateValue(currentStep, event.target.name, event.target.value);
    }

    const setStateValue = (step: number, name: string, value: string) => {
        switch(step) {
            case 1:
                setAccInfo((prevProps: AccInfo) => ({
                    ...prevProps,
                    [name]: value
                }));
                break;
            case 2:
                setPersonalInfo((prevProps: PersonalInfo) => ({
                    ...prevProps,
                    [name]: value
                }));
                break;
            case 3:
                setContactInfo((prevProps: ContactInfo) => ({
                    ...prevProps,
                    [name]: value
                }));
                break;
            default: console.log(`There is no step number ${currentStep}.`)
        }
    }

    const getCurrentStepData = () => {
        let stepData = {};
        switch(currentStep) {
            case 1:
                stepData = accInfo;
                break;
            case 2:
                stepData = personalInfo;
                break;
            case 3:
                stepData = contactInfo;
                break;
        }
        return stepData;
    }

    return (
        <SignupForm 
            currentStep={ currentStep } 
            pastStep={ pastStep }
            eventHandlers = {{ onForward: handleForward, onBack: handleBack, onInputChange: handleInputChange, onAutocompleteChange: handleAutocompleteChange }}
            email= { accInfo.email }
            password= { accInfo.password }
            confirmPassword={ accInfo.confirmPassword }
            country= { contactInfo.country }
            postalCode={ contactInfo.postalCode }
            phone={ contactInfo.phone }
            streetAddress={ contactInfo.streetAddress }
            errors={ errors }
            firstName={ personalInfo.firstName }
            lastName={ personalInfo.lastName }
            city={ contactInfo.city }
            isLoading={false}
        />
    );
}



interface AccInfo {
    email: string
    password: string
    confirmPassword: string
}

interface PersonalInfo {
    firstName: '',
    lastName: ''
}

interface ContactInfo {
    country: '',
    postalCode: '',
    phone: '',
    streetAddress: '',
    city: ''
}

export default SignupFormContainer
