import * as React from "react";
import "./dropItem.css";

interface DropItemProps {
  text: string;
  specialClass?: string;
  onClick?: (content: string) => void;
}
const NOOP = () => {};
export function DropItem({
  text,
  specialClass = "",
  onClick = NOOP,
}: DropItemProps) {

  const handleClick = () => {
    const content = text;
    onClick(content);
  };
  const block = (
    <div className={`d-item ${specialClass}`} onClick={handleClick}>
      <div className="drop-content-block">
        <p className="d-content">{text}</p>
      </div>
    </div>
  );

  return block;
}
