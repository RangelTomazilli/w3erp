import { BigBlueBar } from "./leftBlueBar.Style";
import { LogoW3ERP } from "./logoW3ERP";
import { CardLeftBlueBar } from "../CardLeftBlueBar";
import PizzaIcon from "../../assets/icons/pizza-two";
import GraphicIcon from "../../assets/icons/GraphicIcon";
import ProductsIcon from "../../assets/icons/ProductsIcon";
import { CardTalkToUs } from "./cardTalkToUs";
// import { useNavigate } from "react-router-dom";

export const LeftBlueBar = () => {
  // const navigate = useNavigate();

  const menuItens = [
    {
      icon: <PizzaIcon />,
      name: "Dashboard",
      // link: (window.location.href = "/dashboard"),
    },
    {
      icon: <GraphicIcon />,
      name: "Predições",
      // link: (window.location.href = "/predictions"),
    },
    {
      icon: <ProductsIcon />,
      name: "Produtos",
      // link: (window.location.href = "/dashboard-detail-product"),
    },
  ];

  return (
    <BigBlueBar>
      <LogoW3ERP />
      {menuItens.map((item) => (
        <CardLeftBlueBar
          icon={item.icon}
          name={item.name}
          // link={() => item.link}
          key={item.name}
        />
      ))}
      <CardTalkToUs />
    </BigBlueBar>
  );
};
