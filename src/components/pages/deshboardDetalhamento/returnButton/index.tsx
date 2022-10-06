import ArrowLeftIcon from "../../../../assets/icons/ArrowLeftIcon";
import {
  BackgroundIcon,
  ReturnButtonBox,
  SpanButton,
} from "./ReturnButton.Style";

type Props = {
  previousPage: string;
};

export const ReturnButton = ({ previousPage }: Props) => {
  return (
    <ReturnButtonBox>
      <BackgroundIcon>
        <ArrowLeftIcon />
      </BackgroundIcon>
      <SpanButton>{previousPage}</SpanButton>
    </ReturnButtonBox>
  );
};
