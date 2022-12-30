import React, { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
}>;

export const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
