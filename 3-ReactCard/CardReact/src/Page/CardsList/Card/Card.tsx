import * as React from "react";
import "./card.css";
// import cardImage from ""

export function Card() {
  const card = (
    <li className="card">
      <img src="../../../source/i1.png" alt="" className="card__img" />
      <div className="text-content">
        <h2 className="title">
          <a href="#" className="title__link"></a>
        </h2>

        <div className="meta">
          <div className="meta__user-block">
            <img src="#" alt="Аватар" className="meta__avatar img" />
            <a href="#" className="meta__user-name user-name "></a>
          </div>
          <span className="meta__date txt date">4 часа назад</span>
        </div>
      </div>

      <div className="menu">
        <button className="menu__btn">btn</button>
      </div>
      <div className="controls">
        <div className="voites-counter">
          <button className="voites-counter-btn btn btn--up"> </button>
          <span className="voites-counter-value">0</span>
          <button className="voites-counter-btn btn btn--down"></button>
        </div>
        {/* так же комментарии */}
        <div className="comments">
          <button className="comments-btn">com</button>
        </div>
        {/* так же блок с тремя сссылками */}
        <div className="other">
          <ul className="other-links">
            <li className="other-links__link">
              <a href="#" className="other-links__href">
                1
              </a>
            </li>
            <li className="other-links__link">
              <a href="#" className="other-links__href">
                2
              </a>
            </li>
            <li className="other-links__link">
              <a href="#" className="other-links__href">
                3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
  return card;
}
