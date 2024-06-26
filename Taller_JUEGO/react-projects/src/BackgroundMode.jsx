import React from "react";
import "./BackgroundMode.css";

export function BackgroundMode() {
  return (
    <div className="background-mode">
      <h1>Background Mode</h1>
      <button onClick={handleClick}>Dark Mode</button>
    </div>
  );
}
