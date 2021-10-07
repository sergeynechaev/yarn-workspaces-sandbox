import { counter } from '@sn/yarn-workspaces-sandbox-common';

export const nodeCounter = (value: number) => {
  return `Node Counter is ${counter(value)}`;
};
