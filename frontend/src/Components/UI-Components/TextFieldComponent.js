import React from "react";

function TextFieldComponent(props) {
  return (
    <>
      <div>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
}

export default TextFieldComponent;
