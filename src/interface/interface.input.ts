export interface Props extends IClassProp {
  inputType: string;
  inputPlacheholder?: string;
  inputName: string;
  inputValue?: string;
  inputOnChange?: React.ChangeEventHandler;
}
