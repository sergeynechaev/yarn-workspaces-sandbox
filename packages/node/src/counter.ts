import { counter } from '@sn/yarn-workspaces-bootstrap-common';

export const nodeCounter = (value: number) => {
  return `Node Counter is ${counter(value)}`;
};
