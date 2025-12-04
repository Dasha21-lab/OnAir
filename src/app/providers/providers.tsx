import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export type TProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<TProvidersProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
