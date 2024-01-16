import * as React from "react";
import "./menu.css";
import { DropDown } from "./DropDown/DropDown";
import { DropItem } from "./itemTypes/DropItem/DropItem";
import { DropItemIco } from "./itemTypes/DropItemIco/DropItemIco";

export function Menu() {
  const buttonMenu = (
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
  );
  const block = (
    <div className="menu">
      <DropDown
        onOpen={() => console.log("Открытие")}
        onClose={() => console.log("закрытие")}
        button={buttonMenu}
      >
        <DropItemIco text="Наябедничать" specialClass="yellow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
          >
            <path
              d="M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z"
              fill="#999999"
            />
          </svg>
        </DropItemIco>
        <DropItemIco text="Скрыть" specialClass="red">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z"
              fill="#999999"
            />
          </svg>
        </DropItemIco>
        <DropItem text="Закрыть" />
      </DropDown>
    </div>
  );
  return block;
}
