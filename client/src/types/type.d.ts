interface UserData {
    email: string
    password: string
}

interface AuthErrorMessages {
    errors: AuthErrors
}

interface AuthErrors {
    email: string
    password: string
    confirmPassword?: string
    firstName?: string
    lastName?: string
    streetAddress?: string
    city?: string
    postalCode?: string
    country?: string
    phone?: string
}