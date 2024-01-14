import * as React from "react";
import "./card.css";
import { Content } from "./Content/Content";

import { Menu } from "./Menu/Menu";
import { Other } from "./Other/Оther";
// import cardImage from ""

export function Card() {
  const card = (
    <li className="card">
      <img src="../../../source/i1.png" alt="" className="card__img" />
      
      <Content
        titleText="Поднимаем важные темы. Парадокс Ферми"
        avatarN={2}
        userName="Реальный Пупс"
        date="3 "
      />
      <Menu />
      <div className="controls">
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

        <div className="comments">
          <button className="comments-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"
                fill="#C4C4C4"
              />
            </svg>
          </button>
        </div>

        <Other />
      </div>
    </li>
  );
  return card;
}
