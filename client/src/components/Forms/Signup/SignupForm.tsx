import React from 'react';
import ProgressLine, { ProgressLineItem } from './ProgressLine';
import MultiStepForm, { FormStep } from '../MultiStepForm';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { countryOptions } from '../../../utils/AutocompleteConsts';

function Signup(props: SignupProps) {

    const { currentStep, pastStep } = props;

    const formProgressLine = (
        <ProgressLine>
            <ProgressLineItem title="Account Info" advance />
            <ProgressLineItem title="Personal Info" advance={ currentStep > 1 && true } retreat={ pastStep === 2 && true } />
            <ProgressLineItem title="Contact Info" advance={ currentStep > 2 && true } retreat={ pastStep === 3 && true } />
        </ProgressLine>
    );

    return (
        <MultiStepForm progressLine={ formProgressLine } showStep={ currentStep } >
            <AccountInfo { ...props } />
            <PersonalInfo { ...props } />
            <ContactInfo { ...props } />
        </MultiStepForm>
    );
}

const AccountInfo = (props: AccountInfoProps) => {
    const { eventHandlers, email, password, confirmPassword, errors } = props;
    const { onForward, onInputChange } = eventHandlers;
    return (
        <FormStep title="Account Information" forwardText="Personal" onForward={ onForward }>
            <TextField 
                label="Email" 
                name="email" 
                type="email" 
                id="email" 
                error={ errors.email ? true : false }
                helperText={ errors.email || '' }
                value={ email }
                color="secondary" 
                onChange={ onInputChange }
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
                error={ errors.password ? true : false }
                helperText={ errors.password || '' }
                value={ password }
                color="secondary" 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
            <TextField 
                label="Confirm Password" 
                name="confirmPassword" 
                type="password" 
                id="confirmPassword" 
                error={ errors.confirmPassword ? true : false }
                helperText={ errors.confirmPassword || '' }
                value={ confirmPassword }
                color="secondary" 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
        </FormStep>
    );
};

const PersonalInfo = (props: PersonalInfoProps) => {
    const { eventHandlers, firstName, lastName, errors } = props;
    const { onBack, onForward, onInputChange } = eventHandlers;
    
    return (
        <FormStep title="Personal Information" backText="Account" onBack={ onBack } forwardText="Contact" onForward={ onForward }>
            <TextField 
                label="First Name" 
                name="firstName" 
                type="text" 
                id="firstName"
                error={ errors.firstName ? true : false }
                helperText={ errors.firstName || '' } 
                value={ firstName }
                color="secondary" 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                autoFocus
                required 
            />
            <TextField 
                label="Last Name" 
                name="lastName" 
                type="text" 
                id="lastName"
                error={ errors.lastName ? true : false }
                helperText={ errors.lastName || '' }  
                value={lastName}
                color="secondary" 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
        </FormStep>
    );
};

const ContactInfo = (props: ContactInfoProps) => {
    const { eventHandlers, streetAddress, city, postalCode, country, phone, errors, isLoading } = props;
    const { onBack, onForward, onInputChange, onAutocompleteChange } = eventHandlers;
    return (
        <FormStep title="Contact Information" backText="Contact" onBack={ onBack } forwardText="Sign up" onForward={ onForward } disableOnForward = { isLoading }>
            <TextField 
                label="Street Address" 
                name="streetAddress" 
                type="text" 
                id="streetAddress"
                error={ errors.streetAddress ? true : false }
                helperText={ errors.streetAddress || '' }  
                value={ streetAddress } 
                color="secondary"
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                autoFocus
                required 
            />
            
            <div style={{ display: 'flex' }}>
                <TextField
                    label="City" 
                    name="city" 
                    type="text" 
                    id="city"
                    error={ errors.city ? true : false }
                    helperText={ errors.city || '' }  
                    value={ city } 
                    color="secondary"
                    onChange={ onInputChange }
                    inputProps={{ maxLength: 64 }}
                    required 
                />
                <TextField 
                    style={{ marginLeft: '1rem' }}
                    label="Postal Code" 
                    name="postalCode" 
                    type="text" 
                    id="postalCode"
                    error={ errors.postalCode ? true : false }
                    helperText={ errors.postalCode || 'Zip Code' }  
                    value={ postalCode } 
                    color="secondary"
                    onChange={ onInputChange }
                    inputProps={{ maxLength: 16 }}
                    required 
                />
            </div>
            <Autocomplete 
                id="country"
                value={ country === '' ? '' : country } 
                onChange={ onAutocompleteChange }
                options={ countryOptions.map(option => option.label) }
                renderInput={ (params) => <TextField {...params} error={ errors.country ? true : false } helperText={ errors.country || '' } label="Country" required/> }
                autoHighlight 
                disableClearable
                fullWidth
            />
            <TextField 
                label="Phone Number" 
                name="phoneNumber" 
                type="tel" 
                id="phone"
                error={ errors.phone ? true : false }
                helperText={ errors.phone || '' }  
                value={phone} 
                color="secondary"
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
        </FormStep> 
    );
};

interface SignupProps extends AccountInfoProps, PersonalInfoProps, ContactInfoProps {
    currentStep: number
    pastStep: number
}

interface SignupEventHandlers {
    onInputChange: React.ChangeEventHandler<HTMLInputElement>
    onForward: React.MouseEventHandler
    onBack?: React.MouseEventHandler
    onAutocompleteChange?: React.ChangeEventHandler<{}>
}

interface AccountInfoProps {
    eventHandlers: SignupEventHandlers
    email: string
    password: string
    confirmPassword: string
    errors: AuthErrors
}

interface PersonalInfoProps {
    eventHandlers: SignupEventHandlers
    firstName: string
    lastName: string
    errors: AuthErrors
}

interface ContactInfoProps {
    eventHandlers: SignupEventHandlers
    streetAddress: string
    city: string
    postalCode: string
    country: string
    phone: string
    isLoading: boolean
    errors: AuthErrors
}

export default Signup;
