import React from "react";
import SubmitButtonComponent from "../UI-Components/SubmitButtonComponent";
import TextFieldComponent from "../UI-Components/TextFieldComponent";

function LoginPageComponent(props) {
  return (
    <>
      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form action="">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <TextFieldComponent type="text" placeholder="Name" />
            <TextFieldComponent type="text" placeholder="Email" />
            <TextFieldComponent
              type="text"
              placeholder="Phone Number"
            />
            <TextFieldComponent
              type="text"
              placeholder="Password"
            />
            <TextFieldComponent
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <SubmitButtonComponent type="submit" name="Submit" />
        </form>
      </div>
    </>
  );
}

export default LoginPageComponent;
