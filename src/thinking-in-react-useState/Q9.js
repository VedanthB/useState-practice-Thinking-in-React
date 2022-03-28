/* 

### Q9

## ex6: designer tool (mini figma)

Let user finalise the size of text she would like on the screen. Two buttons `+`
and `-` both will increase/decrease size by 8px. Show the size on the screen.

**IDEA** You can make a small app around this which quickly selects you between
fonts.

- Have prefixed sizes. Multiples of 8px.
- Have some selected best fonts.
- Tell which fonts are good for heading. which are good for text.
- Suggest pair of fonts which go together.
- Give user an option to copy the CSS. (Bonus feature)

*/

import { useState } from "react";

export default function MiniFigma() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [heading, setHeading] = useState("h1");

  return (
    <div className="">
      <input
        className="m-5 p-5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex ">
        <button className="m-6" onClick={() => setFontSize(fontSize + 8)}>
          +
        </button>
        <button className="m-6" onClick={() => setFontSize(fontSize - 8)}>
          -
        </button>
      </div>

      <div classname="flex flex-col">
        {heading === "h1" && (
          <h1 style={{ fontSize: `${fontSize}px` }} className="">
            {text}
          </h1>
        )}
        {heading === "h2" && (
          <h2 style={{ fontSize: `${fontSize}px` }} className="">
            {text}
          </h2>
        )}
        {heading === "h3" && (
          <h3 style={{ fontSize: `${fontSize}px` }} className="">
            {text}
          </h3>
        )}
        {heading === "h4" && (
          <h4 style={{ fontSize: `${fontSize}px` }} className="">
            {text}
          </h4>
        )}
        {heading === "h5" && (
          <h5 style={{ fontSize: `${fontSize}px` }} className="">
            {text}
          </h5>
        )}
        {heading === "h6" && (
          <h6 style={{ fontSize: `${fontSize}px` }} className="">
            {text}
          </h6>
        )}
      </div>

      <div className="flex flex-col">
        <button className="m-5" onClick={() => setHeading("h1")}>
          h1
        </button>
        <button className="m-5" onClick={() => setHeading("h2")}>
          h2
        </button>
        <button className="m-5" onClick={() => setHeading("h3")}>
          h3
        </button>
        <button className="m-5" onClick={() => setHeading("h4")}>
          h4
        </button>
        <button className="m-5" onClick={() => setHeading("h5")}>
          h5
        </button>
        <button className="m-5" onClick={() => setHeading("h6")}>
          h6
        </button>
      </div>
    </div>
  );
}
