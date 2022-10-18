import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CardLeftBlueBarStyle } from "./CardLeftBlueBar.Style";

type Props = {
  icon: ReactNode;
  name: string;
  link: string;
};

export const CardLeftBlueBar = ({ icon, name, link }: Props) => {
  return (
    <CardLeftBlueBarStyle to={link}>
      <div>
        {icon}
        <span>{name}</span>
      </div>
    </CardLeftBlueBarStyle>
  );
};
