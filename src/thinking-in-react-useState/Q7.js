/* 
### Q7.

## ex4: disable submit

- Add a submit button to password change field.
- Disable submit button if passwords don't match
- Clicking on submit should console the password field
*/

import { useState } from "react";

export default function Q7() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        style={{
          borderColor: `${
            confirmPassword === password &&
            password !== "" &&
            confirmPassword !== ""
              ? "green"
              : "red"
          }`,
          margin: "1rem",
          padding: "1rem"
        }}
        value={password}
        onChange={(e) => handlePasswordChange(e)}
      />
      <input
        style={{
          borderColor: `${
            confirmPassword === password &&
            password !== "" &&
            confirmPassword !== ""
              ? "green"
              : "red"
          }`,
          margin: "1rem",
          padding: "1rem"
        }}
        value={confirmPassword}
        onChange={(e) => handleConfirmPasswordChange(e)}
      />

      <button
        disabled={
          confirmPassword === password &&
          password !== "" &&
          confirmPassword !== ""
            ? false
            : true
        }
        onClick={() => console.log(password)}
      >
        {" "}
        submit{" "}
      </button>
    </div>
  );
}
