import { useSelector } from 'react-redux';

const useFormValidation = (validationRules) => {
  const fields = useSelector((state) => state.fields);

  const errors = {};

  for (const fieldName in validationRules) {
    if (validationRules.hasOwnProperty(fieldName)) {
      if (!validationRules[fieldName](fields[fieldName])) {
        errors[fieldName] = 'Enter Company Name is required !...';
      }
    }
  }

  return errors;
};

export default useFormValidation;
