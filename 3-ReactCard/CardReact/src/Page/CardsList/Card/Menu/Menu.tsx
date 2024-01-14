import * as React from "react";
import "./menu.css";

export function Menu() {
  const block = (
    <div className="menu">
      <button className="menu__btn">
        <svg
          width="5"
          height="20"
          viewBox="0 0 5 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
        </svg>
      </button>
    </div>
  );
  return block;
}
