const validEmailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;


export const validateForm = (validationRequirements:any, data:any): ValidateSignup => {
    let errors:any = {};
    
   Object.keys(data).forEach((property) => {
        const value = data[property];
        
        if(typeof value == 'object' && value !== null) {
            const result = validateForm(validationRequirements, value);
            if(!result.isValid) {
                errors = {
                    ...errors,
                    ...result.errors
                }
            }
        } else {
            errors = {
                ...errors,
                [property]: ''
            }

            const requirements = validationRequirements[property];
            if(!requirements) return;

            if(requirements.isRequired) {
                const { isValid, error } = validateIsRequired(value, property);
                if(!isValid) {
                    errors[property] = error;
                    return;
                }
            } 
            if(requirements.minLength) {
                const { isValid, error } = validateMinLength(value, property, requirements.minLength);
                if(!isValid) {
                    errors[property] = error;
                    return;
                }
            }
            if(requirements.isEmailValid) {
                const { isValid, error } = validateEmail(value);
                if(!isValid) {
                    errors[property] = error;
                    return;
                }
            }
        }
    });
    
    return {
        isValid: noErrors(errors),
        errors: errors
    };
};

export const validateIsRequired = (value:any, property:any) => {
    return (
        !value 
            ? { isValid: false, error: `${capitalize(property)} cannot be empty.` } 
            : { isValid: true, error: '' }
    );
};

export const validateEmail = (value:any) => {   
    return (
        !validEmailRegex.test(value) 
            ? { isValid: false, error: 'Not a valid email adress.' }
            : { isValid: true, error: '' }
        );
};

export const validateMinLength = (value:any, property:any, minLength:any) => {
    return (
        value.length < minLength 
            ? { isValid: false, error: `${capitalize(property)} should contain at least ${minLength} characters.` }
            : { isValid: true, error: '' }    
    );
};

const noErrors = (errors:string) => {
    return !(Object.values(errors).filter(error => error.length > 0).length > 0)
}

const capitalize = (s:string) => s.charAt(0).toUpperCase() + s.slice(1);

export const validateLoginForm = (userData:any) => {
    const validationRequirements = {
        email: {
            isRequired: true,
            isEmailValid: true
        },
        password: {
            isRequired: true
        }
    }

    return validateForm(validationRequirements, userData);
}

interface ValidateSignup {
    isValid: boolean
    errors: AuthErrors
}

export const validateSignupForm = (stepData:any, step:any): ValidateSignup => {
    let validationRequirements = {};
    switch(step) {
        case 1:
            validationRequirements = {
                email: {
                    isRequired: true,
                    isEmailValid: true
                },
                password: {
                    isRequired: true,
                    minLength: 8
                }
            };
            return validateForm(validationRequirements, stepData);
        case 2:
            validationRequirements = {
                firstName: {
                    isRequired: true,
                },
                lastName: {
                    isRequired: true,
                }
            };
            return validateForm(validationRequirements, stepData);
        case 3:
            validationRequirements = {
                streetAddress: {
                    isRequired: true,
                },
                city: {
                    isRequired: true,
                },
                postalCode: {
                    isRequired: true,
                },
                country: {
                    isRequired: true,
                },
                phone: {
                    isRequired: true,
                }
            };
            return validateForm(validationRequirements, stepData);
        default: console.log(`Invalid step: ${step}.`);
        return { isValid: false, errors: {} as AuthErrors };
    }
}