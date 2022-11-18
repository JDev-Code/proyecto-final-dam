import * as yup from 'yup'

export const logInValidationSchema = yup.object().shape({
  email: yup.string().email('Use a valid E-mail.').required(''),
  password: yup.string().min(8, 'Too short! Minimum 8 characters.').max(50, 'Too long! Maximum 50 characters.').required('')
})