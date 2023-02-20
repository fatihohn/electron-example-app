import { ReactNode, Component, HTMLAttributes } from 'react';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

type VerticalStackItemProps = {
  children: ReactNode | Component;
} & DivProps;

export default function VerticalStackItem(props: VerticalStackItemProps) {
  const { children } = props;
  return (
    <div
      className="flex justify-center items-center w-[60px] h-[60px]"
      {...props}
    >
      {children}
    </div>
  );
}
