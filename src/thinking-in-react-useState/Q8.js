/* 
### Q8

## ex5: show password

- Create a password reset form
- Put a button `show password` near the input element.
- Clicking should show password to the user.
- Text on `show password` should change to `hide password` when password is
shown.
- Click on `hide password` and password goes back to hidden again.
*/

import { useState } from "react";

export default function Q8() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [showConfirmPassword, setShowConfirmPassword] = useState("password");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  console.log(showPassword);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", margin: "1rem", alignItems: "center" }}>
        <input
          type={showPassword}
          style={{
            borderColor: `${
              confirmPassword === password &&
              password !== "" &&
              confirmPassword !== ""
                ? "green"
                : "red"
            }`,
            padding: "1rem"
          }}
          value={password}
          onChange={(e) => handlePasswordChange(e)}
        />
        {showPassword === "password" ? (
          <div
            style={{ margin: "6px" }}
            onClick={() => setShowPassword("text")}
          >
            <i className="fa-solid fa-eye"></i>
          </div>
        ) : (
          <div
            style={{ margin: "6px" }}
            onClick={() => setShowPassword("password")}
          >
            <i className="fa-solid fa-eye-slash"></i>
          </div>
        )}
      </div>

      <div style={{ display: "flex", margin: "1rem", alignItems: "center" }}>
        <input
          type={showConfirmPassword}
          style={{
            borderColor: `${
              confirmPassword === password &&
              password !== "" &&
              confirmPassword !== ""
                ? "green"
                : "red"
            }`,
            padding: "1rem"
          }}
          value={confirmPassword}
          onChange={(e) => handleConfirmPasswordChange(e)}
        />
        {showConfirmPassword === "password" ? (
          <div
            style={{ margin: "6px" }}
            onClick={() => setShowConfirmPassword("text")}
          >
            <i className="fa-solid fa-eye"></i>
          </div>
        ) : (
          <div
            style={{ margin: "6px" }}
            onClick={() => setShowConfirmPassword("password")}
          >
            <i className="fa-solid fa-eye-slash"></i>
          </div>
        )}
      </div>
    </div>
  );
}
