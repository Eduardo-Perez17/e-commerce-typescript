import React from 'react';

const HeaderHTML = ({ children, classStyle }: IClassPropAndChildren): JSX.Element => {
  return <header className={classStyle}>{children}</header>;
};

export default HeaderHTML;
