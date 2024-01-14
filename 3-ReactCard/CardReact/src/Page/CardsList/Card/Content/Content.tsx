import * as React from "react";
import "./content.css";

interface ContentProps {
  titleText: string;
  avatarN: number;
  userName: string;
  date: string;
}

export function Content({ titleText, avatarN, userName, date }: ContentProps) {
  const block = (
    <div className="text-content">
      <h2 className="title">
        <a href="#" className="title__link heading">
          {titleText}
        </a>
        {/* <span className="title__dots">...</span> */}
      </h2>

      <div className="meta">
        <div className="meta__user-block">
          <img
            src={`../../../source/i${avatarN}.jpg`}
            alt="Аватар"
            className="meta__avatar img"
          />
          <a href="#" className="meta__user-name user-name txt txt-light">
            {userName}
          </a>
        </div>
        <p className="meta__date txt date  txt--light">
          <span className="date--long txt txt--light"> опубликованно </span>
          {date}
          часа назад
        </p>
      </div>
    </div>
  );
  return block;
}
