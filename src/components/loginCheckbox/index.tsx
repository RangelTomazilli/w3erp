import { LabelRemember, RememberBlock } from './LoginCheckbox.Styled'

type Props = {
  id: string
  htmlFor: string
  labelName: string
}

export const CheckboxRemember = ({id, htmlFor, labelName}: Props) => {
  return (
    <RememberBlock>
      <input id={id} type="checkbox" />
      <LabelRemember htmlFor={htmlFor}> {labelName}</LabelRemember>
    </RememberBlock>
  );
};
