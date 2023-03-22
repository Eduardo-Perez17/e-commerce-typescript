interface IChildrenProp {
  children: JSX.Element | JSX.Element[] | string;
}

interface IClassProp {
  classStyle?: string;
}

interface IClassPropAndChildren {
  classStyle?: string;
  children: JSX.Element | JSX.Element[] | string;
}

interface ILabelProp extends IClassPropAndChildren {
  forLabel: React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> | string;
}
