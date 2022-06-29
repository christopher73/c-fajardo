import React from "react";
import "./darkMode.css";
export default function DarkModeSwitch() {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
