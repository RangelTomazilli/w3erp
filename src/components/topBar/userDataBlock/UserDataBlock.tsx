import {
  UserDataDivStyle,
  UserDataParagraphStyle,
  UserDataSecondParagraphStyle,
} from "./UserDataBlock.Style";

type Props = {
  name: string;
  email: string;
};

export const UserDataBlock = ({ name, email }: Props) => {
  return (
    <UserDataDivStyle>
      <UserDataParagraphStyle>{name}</UserDataParagraphStyle>
      <UserDataSecondParagraphStyle>{email}</UserDataSecondParagraphStyle>
    </UserDataDivStyle>
  );
};
