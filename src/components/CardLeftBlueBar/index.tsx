import { ReactNode } from "react";
import { CardLeftBlueBarStyle } from "./CardLeftBlueBar.Style";

type Props = {
  icon: ReactNode;
  name: string;
  // link: () => {};
};

export const CardLeftBlueBar = ({ icon, name }: Props) => {
  return (
    <CardLeftBlueBarStyle>
      {icon}
      <span>{name}</span>
    </CardLeftBlueBarStyle>
  );
};
