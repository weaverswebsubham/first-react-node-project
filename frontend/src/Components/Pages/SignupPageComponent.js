import React from "react";
import SubmitButtonComponent from "../UI-Components/SubmitButtonComponent";
import TextFieldComponent from "../UI-Components/TextFieldComponent";

function LoginPageComponent(props) {
  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <form
          className="w-full max-w-md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ring-4"
          action=""
        >
          <div className="text-center mb-5">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">
              Sign up
            </h5>
          </div>
          <div>
            <TextFieldComponent type="text" placeholder="Name" />
            <TextFieldComponent type="text" placeholder="Email" />
            <TextFieldComponent type="text" placeholder="Phone Number" />
            <TextFieldComponent type="text" placeholder="Password" />
            <TextFieldComponent type="text" placeholder="Confirm Password" />
          </div>
          <div className="text-center mt-6">
            <SubmitButtonComponent type="submit" name="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPageComponent;
