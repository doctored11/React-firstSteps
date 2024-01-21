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

  const handleItemClick = (content: string) => {
    console.log("клик по:", content);
  };
  const isDesktop = window.innerWidth > 768;
  const block = (
    <div className="menu">
      <DropDown
        onOpen={() => console.log("Открытие")}
        onClose={() => console.log("закрытие")}
        button={buttonMenu}
      >
        {isDesktop && (
          <>
            <DropItemIco
              text="Комментарии"
             
              onClick={handleItemClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z"
                  fill="#999999"
                />
              </svg>
            </DropItemIco>
            <DropItemIco text="Поделиться" onClick={handleItemClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
              >
                <path
                  d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z"
                  fill="#999999"
                />
              </svg>
            </DropItemIco>
          </>
        )}

        <DropItemIco
          text="Наябедничать"
          specialClass="yellow"
          onClick={handleItemClick}
        >
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
        <DropItemIco text="Скрыть" specialClass="red" onClick={handleItemClick}>
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

        <DropItem text="Закрыть" onClick={handleItemClick} />
      </DropDown>
    </div>
  );
  return block;
}
