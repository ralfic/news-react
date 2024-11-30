import { Provider } from 'react-redux';
import { store } from '../appStore';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function NewsProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
