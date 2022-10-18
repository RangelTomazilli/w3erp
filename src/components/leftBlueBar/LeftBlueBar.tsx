import { BigBlueBar } from "./leftBlueBar.Style";
import { LogoW3ERP } from "./logoW3ERP";
import { CardLeftBlueBar } from "../CardLeftBlueBar";
import PizzaIcon from "../../assets/icons/pizza-two";
import GraphicIcon from "../../assets/icons/GraphicIcon";
import ProductsBlueBarIcon from "../../assets/icons/ProductsBlueBarIcon";
import { CardTalkToUs } from "./cardTalkToUs";

export const LeftBlueBar = () => {
  const menuItens = [
    {
      icon: <PizzaIcon />,
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <GraphicIcon />,
      name: "Predições",
      link: "/predictions",
    },
    {
      icon: <ProductsBlueBarIcon />,
      name: "Produtos",
      link: "/products",
    },
  ];

  return (
    <BigBlueBar>
      <LogoW3ERP />
      {menuItens.map((item) => (
        <CardLeftBlueBar
          icon={item.icon}
          name={item.name}
          link={item.link}
          key={item.name}
        />
      ))}
      <CardTalkToUs />
    </BigBlueBar>
  );
};
