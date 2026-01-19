import { object, string } from 'yup';

export const validationSchema = object({
  email: string()
    .min(5, 'Must be more 4 characters')
    .matches(/@[\w.-]+\.[\w.-]+/, 'Must have @ and .')
    .required('Enter your email'),
});

export const initialValues = {
  email: '',
};
