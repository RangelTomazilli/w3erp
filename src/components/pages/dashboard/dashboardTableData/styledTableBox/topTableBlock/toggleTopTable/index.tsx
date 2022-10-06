import {
  BackgroundToggle,
  OnDownButton,
  OnHighButton,
} from "./ToggleTopTable.Style";

export const ToggleButtonTop = () => {
  return (
    <BackgroundToggle>
      <OnHighButton>Em alta</OnHighButton>
      <OnDownButton>Em baixa</OnDownButton>
    </BackgroundToggle>
  );
};
