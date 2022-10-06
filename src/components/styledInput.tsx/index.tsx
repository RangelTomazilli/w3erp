import React from "react";
import { StyledLabel } from "./Input.Style";

type Props = {
  htmlfor: string;
  labelName: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
};
export const InputPlusLabel = ({
  htmlfor,
  id,
  value,
  onChange,
  placeholder,
  labelName,
  type,
}: Props) => {
  return (
    <StyledLabel>
      <label htmlFor={htmlfor}>{labelName}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </StyledLabel>
  );
};
