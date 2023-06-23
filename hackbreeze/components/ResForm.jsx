import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  image: null,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
});

const handleSubmit = (values) => {
  console.log(values); // Do something with the form values
};

const ResForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <Form className="relative h-screen w-screen">
      <div className="h-[20px] font-medium w-[3500px] mt-[60px] ml-[170px]">
        <h1 className="font-poppins text-[30px]">Create new account</h1>
      </div>

      <div className="flex mt-[20px] ml-[170px]">
        <h4>Already a member?</h4>
        <h4>
          <a href="#" className="text-7B2869 font-medium ml-5 hover:bg-gray-300">
            Log in
          </a>
        </h4>
      </div>

      <div className="ml-[180px] mt-[30px]">
        <label className="font-medium">Name</label>
        <div className="flex">
          <div className="h-[60px] w-[180px] rounded-[15px] bg-[#FFEDED]">
            <Field
              type="text"
              name="firstName"
              className="h-[40px] w-[120px] ml-[40px] mt-[6px] bg-[#ffeded]"
              placeholder="First Name"
            />
          </div>
          <div className="h-[60px] w-[180px] rounded-[15px] bg-[#FFEDED] ml-[30px]">
            <Field
              type="text"
              name="lastName"
              className="h-[40px] w-[120px] ml-[40px] mt-[6px] bg-[#ffeded]"
              placeholder="Last Name"
            />
          </div>
        </div>
        <ErrorMessage name="firstName" component="p" className="text-red-500" />
        <ErrorMessage name="lastName" component="p" className="text-red-500" />
      </div>

      <div className="ml-[180px] mt-[30px]">
        <label className="font-medium">Email ID</label>
        <div className="h-[60px] w-[390px] rounded-[15px] bg-[#FFEDED]">
          <Field
            type="text"
            name="email"
            className="h-[40px] w-[140px] ml-[40px] mt-[6px] bg-[#ffeded]"
            placeholder="Enter your email ID"
          />
        </div>
        <ErrorMessage name="email" component="p" className="text-red-500" />
      </div>

      <div className="ml-[180px] mt-[30px]">
        <label className="font-medium">Password</label>
        <div className="h-[60px] w-[390px] rounded-[15px] bg-[#FFEDED]">
          <Field
            type="password"
            name="password"
            className="h-[40px] w-[200px] ml-[40px] mt-[6px] bg-[#ffeded]"
            placeholder="Enter a strong password"
          />
        </div>
        <ErrorMessage name="password" component="p" className="text-red-500 font-poppins font-normal text-sm" />
      </div>

      <div className="ml-[180px] mt-[30px]">
        <label className="font-medium">Upload image</label>
        <div className="h-[60px] w-[120px] rounded-[10px] bg-[#FFEDED]">
                <button
                type="submit" 
                className="bg-#FFEDED hover:bg-#FFEDED text-black font-bold py-5 px-12 flex items-center"
                >
                <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              </button>
          {/* <Field
            type="file"
            id="image"
            name="image"
            className="h-40 w-40 ml-4 mt-10" */}
          {/* /> */}
        </div>
      </div>

      <div className="ml-[320px] mt-[30px]">
        <div className="h-[60px] w-[160px] rounded-[50px] bg-[#7B2869]">
          <button
            type="submit"
            className="bg- #7B2869 hover:bg-blue-#7B2869 text-white font-bold ml-[50px] mt-[15px] "
          >
            Create
          </button>
        </div>
      </div>

    </Form>
  </Formik>
);

export default ResForm;

