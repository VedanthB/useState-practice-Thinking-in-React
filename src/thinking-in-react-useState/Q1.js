/* 

use state syntax

```jsx
const [ currentState, updateStateTo ] = useState(initialValue) 
```

- What happens when you set the state to a new value?
    - use `console.log()` to see the renders?
    
    It renders the value of the state before the re render

*/

import { useState } from "react";

export default function UseStateExample() {
  const [value, setValue] = useState(1);

  const handleCLick = () => {
    setValue(10);

    console.log(value);
  };

  return (
    <div className="App">
      {value}
      <button onClick={handleCLick}> click me to update state </button>
    </div>
  );
}

/* 

This is because states behaves like a snapshot. 
Updating state requests another render with the new state value, 
but does not affect the value JavaScript variable in your 
already-running event handler.

*/
