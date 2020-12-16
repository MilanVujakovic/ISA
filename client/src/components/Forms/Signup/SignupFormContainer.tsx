import React, { MouseEventHandler, ChangeEventHandler, ChangeEvent } from 'react';
import SignupForm from './SignupForm';

function SignupFormContainer() {
    const handleForward: MouseEventHandler = (event) => {
        event.preventDefault();
    };

    const handleBack: MouseEventHandler = (event) => {
        event.preventDefault();
    };

    const handleAutocompleteChange: ChangeEventHandler<{}> = (event:ChangeEvent<{}>) => {
        
        console.log(' ')
    }

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {

    }

    return (
        <SignupForm 
            stepNumber={2} 
            pastStep={1}
            eventHandlers = {{ onForward: handleForward, onBack: handleBack, onInputChange: handleInputChange, onAutocompleteChange: handleAutocompleteChange }}
            email=""
            password=""
            confirmPassword=""
            country=""
            postalCode=""
            phone=""
            streetAddress=""
            errors={ {email: "", password:""}}
            firstName=""
            lastName=""
            city=""
            isLoading={false}
        />
    );
}

export default SignupFormContainer
