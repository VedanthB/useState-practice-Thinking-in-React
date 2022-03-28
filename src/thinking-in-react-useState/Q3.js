/* 
### Q3.

## ex: change background color

Take a paragraph with text. Have a toggle button. Change the color of the
background between `red` and `transparent` on every button click
*/

import { useState } from "react";

export default function Q3() {
  const [color, setColor] = useState("red");

  const changeBackgroundColor = () =>
    color === "red" ? setColor("transparent") : setColor("red");

  return (
    <div>
      <input type="checkbox" onChange={changeBackgroundColor} />
      <p style={{ backgroundColor: `${color}`, padding: "1rem" }}>
        this is some text
      </p>
    </div>
  );
}
