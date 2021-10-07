import { counter } from '@sn/yarn-workspaces-sandbox-common';

export const jsCounter = (value: number) => {
  return `JS Counter is ${counter(value)}`;
};
