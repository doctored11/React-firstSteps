import * as React from "react";
import "./dropItem.css";

interface DropItemProps {
  text: string;
  specialClass?: string;
  onClick?: () => void;
}
const NOOP = () => {};
export function DropItem({
  text,
  specialClass = "",
  onClick = NOOP,
}: DropItemProps) {
  const block = (
    <div className={`d-item ${specialClass}`} onClick={onClick}>
      <div className="drop-content-block">
        <p className="d-content">{text}</p>
      </div>
    </div>
  );

  return block;
}
