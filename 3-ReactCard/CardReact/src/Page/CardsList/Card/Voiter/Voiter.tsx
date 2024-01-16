import * as React from "react";

export function Voiter() {
  const block = (
    <div className="voites-counter">
      <button className="voites-counter-btn btn btn--up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
        >
          <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9" />
        </svg>{" "}
      </button>
      <span className="voites-counter-value txt txt--light">0</span>
      <button className="voites-counter-btn btn btn--down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
        >
          <path
            d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z"
            fill="#D9D9D9"
          />
        </svg>
      </button>
    </div>
  );
  return block
}
