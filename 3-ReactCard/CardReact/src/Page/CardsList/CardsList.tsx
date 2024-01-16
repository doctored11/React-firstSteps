import * as React from "react";
import "./cardsList.css";
import { Card } from "./Card/Card";

export function CardsList() {
  const _ul = (
    <ul className="CardsList">
      <Card userName="Реальный Пупс" avatarN={2}  bannerid={1} titleText="Поднимаем важные темы. Парадокс Ферми" date="22"/>
      <Card userName="Реальный Пупс" avatarN={2} bannerid={3} titleText="Что делать если родители заметили за этим?" date="4"/>
    </ul>
  );
  return _ul;
}
