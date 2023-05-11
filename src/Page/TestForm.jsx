import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addUserInfo } from '../Action/index';
import "./form.css"

const UserInfoForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      gender: '',
      email: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      age: yup.number().required('Age is required').positive().integer(),
      gender: yup.string().required('Gender is required'),
      email: yup.string().required('Email is required').email(),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(addUserInfo(values));
      resetForm();
      console.log(values)
    },
  });

  return (
    <>
        <form onSubmit={formik.handleSubmit} className="form-container">
        <label className="form-label">
          Name:
          <input type="text" className="form-input" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? <div className="form-error">{formik.errors.name}</div> : null}
        </label>

        <label className="form-label">
          Age:
          <input type="number" className="form-input" {...formik.getFieldProps('age')} />
          {formik.touched.age && formik.errors.age ? <div className="form-error">{formik.errors.age}</div> : null}
        </label>

        <label className="form-label">
          Gender:
          <select className="form-input" {...formik.getFieldProps('gender')}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? <div className="form-error">{formik.errors.gender}</div> : null}
        </label>

        <label className="form-label">
          Email:
          <input type="email" className="form-input" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? <div className="form-error">{formik.errors.email}</div> : null}
        </label>

        <button type="submit" className="form-submit-btn" disabled={!formik.isValid || formik.isSubmitting}>
          Submit
        </button>
      </form>

      <div className="user-info-card-container">
        <UserInfoCard/>
      </div>
    </>

  
  );
};

const UserInfoCard = () => {
    const userInfo = useSelector((state) => state.userInfo);
  
    return (
      <div className="user-info-card">
        {userInfo.name && (
          <div>
            <h2>User Info:</h2>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>Gender: {userInfo.gender}</p>
            <p>Email: {userInfo.email}</p>
          </div>
        )}
      </div>
    );
  };
  

export default UserInfoForm;
