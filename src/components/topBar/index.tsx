import TopBarMenuIcon from "../../assets/icons/TopBarMenuIcon";
import { MenuIconDiv, TopBarStyle } from "./topBar.Style";
import { UserDataTop } from "./userData";

type Props = {
  name: string;
  email: string;
};

export const TopBar = ({ name, email }: Props) => {
  return (
    <TopBarStyle>
      <MenuIconDiv>
        <TopBarMenuIcon />
      </MenuIconDiv>
      <UserDataTop name={name} email={email} />
    </TopBarStyle>
  );
};
