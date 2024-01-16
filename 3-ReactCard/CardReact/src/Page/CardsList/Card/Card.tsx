import * as React from "react";
import "./card.css";
import { Content } from "./Content/Content";

import { Menu } from "./Menu/Menu";
import { Other } from "./Other/Оther";
import { Voiter } from "./Voiter/Voiter";
// import cardImage from ""
interface CardProp {
  titleText: string;
  bannerid: number;
  avatarN: number;
  userName: string;
  date: string;
}

export function Card({
  titleText,
  avatarN,
  bannerid,
  userName,
  date,
}: CardProp) {
  const card = (
    <li className="card">
      <img
        src={`../../../source/i${bannerid}.png`}
        alt=""
        className="card__img"
      />

      <Content
        titleText={titleText}
        avatarN={avatarN}
        userName={userName}
        date={date}
      />
      <Menu />
      <div className="controls">
        <Voiter />

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
