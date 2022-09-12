import React from "react";
import { useFormik } from "formik";
import SubmitButtonComponent from "../UI-Components/SubmitButtonComponent";
import TextFieldComponent from "../UI-Components/TextFieldComponent";

function SignupPageComponent(props) {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    },
    onSubmit: (values) => {
      console.log(values, "<<-- Values....")
    }
  });

  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <form
          className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ring-4"
          action=""
          onSubmit={formik.handleSubmit}
        >
          <div className="text-center mb-5">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign up
            </h5>
          </div>
          <div>
            <TextFieldComponent name="name" value={formik.values.name} onChange={formik.handleChange} type="text" placeholder="Name" />
            <TextFieldComponent name="email" value={formik.values.email} onChange={formik.handleChange} type="text" placeholder="Email" />
            <TextFieldComponent name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} type="text" placeholder="Phone Number" />
            <TextFieldComponent name="password" value={formik.values.password} onChange={formik.handleChange} type="text" placeholder="Password" />
            <TextFieldComponent name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} type="text" placeholder="Confirm Password" />
          </div>
          <div className="text-center mt-6">
            <SubmitButtonComponent type="submit" name="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SignupPageComponent;
