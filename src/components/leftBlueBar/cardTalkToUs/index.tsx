import { CardTalkToUsStyled, DivHands } from "./TalkToUs.Style";
import Hands from "../../../assets/images/hands.png";

export const CardTalkToUs = () => {
  return (
    <CardTalkToUsStyled>
      <DivHands>
        <img
          src={Hands}
          alt="2 mãos saindo de smartphones e tocando uma na outra."
          width={"150px"}
        />
      </DivHands>
      <span>
        Precisaando de <strong>ajuda<br/> ou suporte</strong> em algo?
      </span>
      <button type="button" onClick={() => {}}>Fale Conosco</button>
    </CardTalkToUsStyled>
  );
};
