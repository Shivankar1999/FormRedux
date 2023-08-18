import { combineReducers } from 'redux';
import {
  SET_FIELD_VALUE,
  TOGGLE_FIELD_VISIBILITY,
  SUBMIT_FORM,
} from './actions';

const initialState = {
  fields: {
    employmentStatus: '',
    companyName: '',
  },
  fieldVisibility: {
    companyName: false,
  },
};

const fieldsReducer = (state = initialState.fields, action) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };
    case SUBMIT_FORM:
      return {
        ...initialState.fields, // Reset fields to their initial empty values on form submit
      };
    default:
      return state;
  }
};

const fieldVisibilityReducer = (
  state = initialState.fieldVisibility,
  action
) => {
  switch (action.type) {
    case TOGGLE_FIELD_VISIBILITY:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.isVisible,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fields: fieldsReducer,
  fieldVisibility: fieldVisibilityReducer,
});

export default rootReducer;
