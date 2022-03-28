/* 
### Q6.

## ex3: alphanumeric password

Password should contain a number. Show error if user misses character.

*/

import { useState } from "react";

export default function Q6() {
  const [password, setPassword] = useState("");

  const checkPassword = (pass) => {
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let passwordArr = pass.split("");

    let result = passwordArr.filter((letter) => numbers.includes(letter));

    return result.length > 0 ? true : false;
  };

  return (
    <div>
      <input
        style={{ borderColor: `${checkPassword(password) ? "green" : "red"}` }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
