import { counter } from '@sn/yarn-workspaces-bootstrap-common';

export const jsCounter = (value: number) => {
  return `JS Counter is ${counter(value)}`;
};
