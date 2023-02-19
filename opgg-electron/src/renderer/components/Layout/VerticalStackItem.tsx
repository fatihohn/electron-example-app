import { ReactNode, Component, PropsWithChildren, HTMLAttributes } from 'react';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

type VerticalStackItemProps = {
  children: ReactNode;
} & DivProps;

export default class VerticalStackItem extends Component<VerticalStackItemProps> {
  constructor(props: PropsWithChildren<VerticalStackItemProps>) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <div className="flex justify-center items-center" {...this.props}>
        {children}
      </div>
    );
  }
}
