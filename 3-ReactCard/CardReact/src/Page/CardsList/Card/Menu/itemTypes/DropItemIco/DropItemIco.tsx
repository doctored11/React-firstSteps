import * as React from "react";
import "./dropItemIco.css";

interface DropItemIcoProps {
  children: React.ReactNode;
  text: string;
  specialClass?: string;
  onClick?: (content: string) => void;}
const NOOP = () => {};
export function DropItemIco({
  children,
  text,
  specialClass = "",
  onClick = NOOP,
}: DropItemIcoProps) {

  const handleClick = () => {
    const content = text;
    onClick(content);
  };

  const block = (
    <div className={`drop-item ${specialClass}`} onClick={handleClick}>
      <div className="drop-svg-block">{children}</div>
      <div className="drop-content-block">
        <p className="drop-content">{text}</p>
      </div>
    </div>
  );

  return block;
}
