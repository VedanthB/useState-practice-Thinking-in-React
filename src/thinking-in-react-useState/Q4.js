/* 

### Q4.

## ex1: character counter (Twitter)

See the Twitter `post` component. It gives you an indicator of the character
count. Replicate that behavior.

*/

import { useState } from "react";

export default function Q4() {
  const [count, setCount] = useState(60);
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <h3
        style={{ color: `${count - inputText.length < 0 ? "red" : "black"}` }}
      >
        {count - inputText.length}
      </h3>
    </div>
  );
}
