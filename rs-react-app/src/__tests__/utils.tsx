import { render, type RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '@/store/store';
import * as setup from '@/store/store';
import type { PropsWithChildren } from 'react';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProvider(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const { store = setup.store, ...renderOptions } = extendedRenderOptions;

  const providerWrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: providerWrapper, ...renderOptions }),
  };
}
