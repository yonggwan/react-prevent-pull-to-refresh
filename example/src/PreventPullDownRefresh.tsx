import React, { useRef, useLayoutEffect } from 'react';
import { PreventOverScrolling } from './prevent-overscrolling';

interface Props {
  forwardedRef: React.MutableRefObject<HTMLElement>;
  children: React.ReactNode | React.ReactNode[];
};

export default function PreventPullDownRefresh({ forwardedRef, children }: Props) {
  const init = useRef<boolean>(false);
  // console.log('1useLayoutEffect@addPreventOverScrolling@', forwardedRef);
  useLayoutEffect(() => {
    if (forwardedRef?.current && init.current === false) {
      // console.log('2useLayoutEffect@addPreventOverScrolling@', forwardedRef?.current);
      PreventOverScrolling(forwardedRef?.current);
      init.current = true;
    }
  }, [forwardedRef?.current]);
  return children;
}