import { object, string } from 'yup';

export const validationSchema = object({
  name: string().min(2, 'Must be more 1 character').required('Enter your name'),
  email: string()
    .min(5, 'Must be more 4 characters')
    .matches(/@[\w.-]+\.[\w.-]+/, 'Must have @ and .')
    .required('Enter your email'),
  message: string()
    .min(3, 'Must be more 2 characters')
    .max(500, 'Must be less then 500 characters')
    .required('Enter your message'),
});

export const initialValues = {
  name: '',
  email: '',
  message: '',
};
