import * as yup from 'yup'

// Esquema de validación la creación de un proyecto
export const newProjectValidationSchema = yup.object().shape({
  title: yup.string().min(3, 'Too short! Minimum 3 characters').max(25, 'Too long! Maximum 25 characters.').required(''),
  description: yup.string().min(20, 'Too short! Minimum 20 characters.').max(1000, 'Too long! Maximum 1000 characters.').required('')
})