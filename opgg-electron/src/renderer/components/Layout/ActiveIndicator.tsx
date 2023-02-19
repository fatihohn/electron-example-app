import { Component, HTMLAttributes } from 'react';

interface DivProps extends HTMLAttributes<HTMLDivElement> {}

export default class ActiveIndicator extends Component<DivProps> {
  render() {
    return <div className="w-1 h-6 rounded-lg bg-indigo-500"></div>;
  }
}
