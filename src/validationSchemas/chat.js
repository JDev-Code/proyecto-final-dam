import * as yup from 'yup'

// Esquema de validación para el chat
export const chat = yup.object().shape({
  chatInput: yup.string().max(999, '').required('')
})