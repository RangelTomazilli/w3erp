import { BigBlueBar } from "./leftBlueBar.Style";
import { LogoW3ERP } from "./logoW3ERP";
import { CardLeftBlueBar } from "../CardLeftBlueBar";
import PizzaIcon from "../../assets/icons/pizza-two";
import GraphicIcon from "../../assets/icons/GraphicIcon";
import ProductsIcon from "../../assets/icons/ProductsIcon";
import { CardTalkToUs } from "./cardTalkToUs";

const menuItens = [
  {
    icon: <PizzaIcon />,
    name: "Dashboard",
  },
  {
    icon: <GraphicIcon />,
    name: "Predições",
  },
  {
    icon: <ProductsIcon />,
    name: "Produtos",
  },
];

export const LeftBlueBar = () => {
  return (
    <BigBlueBar>
      <LogoW3ERP />
      {menuItens.map((item) => (
        <CardLeftBlueBar icon={item.icon} name={item.name} key={item.name} />
      ))}
      <CardTalkToUs />
    </BigBlueBar>
  );
};
