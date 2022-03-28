/* 

## ex2: password match

Any signup form, password reset form has this functionality. Take two passwords
from user. Show error only if both passwords don't match.

*/

import { useState } from "react";

export default function Q5() {
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
    </div>
  );
}
