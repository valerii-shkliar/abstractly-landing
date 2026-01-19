import { ErrorMessage, Field, useField } from 'formik';
import clsx from 'clsx';
import style from './InputBox.module.scss';

function InputBox({
  name,
  id,
  label,
  placeholder,
  classNameBox,
  classNameInput,
  hint,
  type,
  kindItem = 'input',
  maxLength,
}) {
  const [field, meta] = useField({ name, type });

  const customBoxClass = clsx(style.inputContainer, classNameBox);
  const customInputClass = clsx(
    style.input,
    classNameInput,
    meta.touched && meta.error && style.inputError
  );
  const customLimitClass = clsx(style.limit, meta.touched && meta.error && style.error);

  return (
    <div className={customBoxClass}>
      {label && (
        <label htmlFor={id} className={style.label}>
          {label}
        </label>
      )}
      <Field
        as={kindItem}
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        className={customInputClass}
        {...field}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage name={name} className={style.errorMessage} component="span" />
      ) : (
        <span className={style.hintMessage}>{hint}</span>
      )}
      {maxLength && (
        <span className={customLimitClass}>{`${
          field.value ? field.value.length : '0'
        }/${maxLength}`}</span>
      )}
    </div>
  );
}

export default InputBox;
