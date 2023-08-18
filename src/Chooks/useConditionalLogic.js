import { useSelector } from 'react-redux';

const useConditionalLogic = (fieldName, conditionValue) => {
  const fieldValue = useSelector((state) => state.fields[fieldName]);
  return fieldValue === conditionValue;
};

export default useConditionalLogic;
