import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFieldValue,
  toggleFieldVisibility,
  submitForm,
} from './Redux/actions';
import useConditionalLogic from './Chooks/useConditionalLogic';
import useFormValidation from './Chooks/useFormValidation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles/main.css';
const FormComponent = () => {
  const [notifyVal, setnotifyVal] = useState(null);
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state);
  console.log(fields);
  console.log(notifyVal);

  const isEmployed = useConditionalLogic('employmentStatus', 'Yes');
  const validationRules = {
    companyName: (value) => (isEmployed ? value.trim() !== '' : true),
  };
  const validationErrors = useFormValidation(validationRules);
  const handleSubmitform = (e) => {
    e.preventDefault();
    if (
      fields.employmentStatus === '' ||
      fields.employmentStatus === 'No' ||
      (notifyVal !== null && typeof notifyVal === 'string')
    ) {
      toast.success('Form Submiited Sucessfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setnotifyVal(null);
      return;
    }
    if (fields.employmentStatus === 'Yes' && notifyVal === null) {
      toast.error('Error, Please fill the field', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
    // if (notifyVal !== null && typeof notifyVal === 'string') {
    //   toast.success('Form Submiited Sucessfully', {
    //     position: 'top-center',
    //     autoClose: 2000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'colored',
    //   });
    //   setnotifyVal(null);
    //   return;
    // }
  };

  const handleFieldChange = (fieldName, value) => {
    // console.log('Value', value);
    setnotifyVal(value);
    // console.log('Value------', value);
    dispatch(setFieldValue(fieldName, value));
  };

  const handleEmploymentStatusChange = (value) => {
    // setnotifyVal(value);
    dispatch(toggleFieldVisibility('companyName', value === 'Yes'));
    dispatch(setFieldValue('employmentStatus', value));
  };

  const handleSubmit = () => {
    if (Object.keys(validationErrors).length === 0) {
      dispatch(submitForm());
      // alert('Form submitted successfully');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmitform}>
        <label>
          Are you employed?
          <select
            value={isEmployed ? 'Yes' : 'No'}
            onChange={(e) => handleEmploymentStatusChange(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        {isEmployed && (
          <label>
            Company Name:
            <input
              type="text"
              value={fields.companyName}
              onChange={(e) => handleFieldChange('companyName', e.target.value)}
              placeholder="Enter Company Name..."
              // required
            />
            {validationErrors.companyName && (
              <span className="error">{validationErrors.companyName}</span>
            )}
          </label>
        )}
        <button
          className="creative-button"
          onClick={handleSubmit}
          // type="submit"
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default FormComponent;
