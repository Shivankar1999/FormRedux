// Action Types
export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
export const TOGGLE_FIELD_VISIBILITY = 'TOGGLE_FIELD_VISIBILITY';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';
// Action Creators
export const setFieldValue = (fieldName, value) => ({
  type: SET_FIELD_VALUE,
  payload: { fieldName, value },
});

export const toggleFieldVisibility = (fieldName, isVisible) => ({
  type: TOGGLE_FIELD_VISIBILITY,
  payload: { fieldName, isVisible },
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});
