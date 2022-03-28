/* 
### Q13.

ex9: toast#

    Create a Toast Component
    Component should have two things
        Text
        Hide Button
    Create a button show toast
        Clicking on this button should show Toast
    Clicking on hide button on toast should hide the toast
    UNDERSTAND : how callbacks can be passed to control state from parent component.
    CHALLENGE :
        Create different type of toasts: Error, Success, Warning etc.
        Differentiate your toast by just a prop and the design should change
*/

import { useState } from "react";

export default function Toast({ text }) {
  const [showToast, setShowToast] = useState("invisible");

  const handleShowToast = () => {
    setShowToast("visible");

    setTimeout(function () {
      setShowToast("invisible");
    }, 5000);
  };
  return (
    <>
      <div
        id="snackbar"
        className={`w-min flex m-auto alert-box bg-orange-200 text-orange-800  text-md ${showToast} `}
      >
        <span>
          <i className="alert-icon justify-start fas fa-exclamation-triangle"></i>
        </span>
        {text}

        <button type="button" className="btn-close m-5"></button>
      </div>

      <div className="btn btn-link-sky" onClick={handleShowToast}>
        Show Toast
      </div>
    </>
  );
}
