import * as yup from 'yup'

export const signupValidationSchema = yup.object().shape({
  username: yup.string().min(3, 'Too short! Minimum 3 characters').max(15, 'Too long! Maximum 15 characters.').required(''),
  email: yup.string().email('Use a valid E-mail.').required(''),
  password: yup.string().min(8, 'Too short! Minimum 8 characters.').max(50, 'Too long! Maximum 50 characters.').required('')
})