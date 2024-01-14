import * as React from "react";
import "./cardsList.css";
import { Card } from "./Card/Card";

export function CardsList() {
  const _ul = (
    <ul className="CardsList">
      <Card/>
    </ul>
  );
  return _ul;
}
