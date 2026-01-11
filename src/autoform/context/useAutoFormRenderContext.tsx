import { useContext } from 'react';
import { AutoFormRenderContext, AutoFormRenderContextProps } from './AutoFormRenderContext';

export const useAutoFormRenderContext = <
  TCustom extends string = never,
>(): AutoFormRenderContextProps<TCustom> => {
  const ctx = useContext(AutoFormRenderContext);

  if (!ctx) {
    throw new Error('useAutoFormRenderContext must be used within AutoFormRenderContextProvider');
  }

  return ctx as AutoFormRenderContextProps<TCustom>;
};
