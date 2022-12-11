import * as yup from 'yup'

export const chat = yup.object().shape({
  chatInput: yup.string().max(999, '').required('')
})