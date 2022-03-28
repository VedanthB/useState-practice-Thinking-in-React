/* 
ex11: dark mode#

    Create a toggle dark mode button
    Clicking on the button should change background and text color and toggle between dark and light mode

*/

import { useState } from "react";

export default function DarkMode() {
  const [darkMode, setdarkMode] = useState(false);
  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } h-full `}
    >
      <input
        type="checkbox"
        onChange={(e) => setdarkMode(!darkMode)}
        value={darkMode}
      />

      <h6> Click the toggle button to switch between dark and light mode </h6>
    </div>
  );
}
