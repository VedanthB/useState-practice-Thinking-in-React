/* 
### Q2.

### challenge

Two buttons `+` and `-`

Clicking on the button should change the value in view.
*/

import { useState } from "react";

export default function Q2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={(prevCount) => setCount(count + 1)}> + </button>
      <button onClick={(prevCount) => setCount(count - 1)}> - </button>
    </div>
  );
}
