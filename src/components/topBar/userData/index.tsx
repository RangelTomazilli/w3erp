import ArrowDownIcon from "../../../assets/icons/ArrowDownIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import { UserDataBlock } from "../userDataBlock/UserDataBlock";
import { UserBlockDiv, UserDataStyle } from "./userData.style";

type Props = {
  name: string;
  email: string;
};

export const UserDataTop = ({ name, email }: Props) => {
  return (
    <UserDataStyle>
      <UserBlockDiv>
        <UserIcon />
        <UserDataBlock name={name} email={email} />
        <ArrowDownIcon />
      </UserBlockDiv>
    </UserDataStyle>
  );
};
