import { useState, useRef, useLayoutEffect } from 'react';
import './PreventPullDownRefresh.css';

export default function PreventPullDownRefresh({ children }) {
  const ref = useRef(null);
  const [height, setHeight] = useState('auto');
  useLayoutEffect(() => {
    const child = ref?.current.children[0];
    setHeight(`calc(${child.offsetHeight}px - 1px)`);
  }, []);
  return (
    <div
      ref={ref}
      className="prevent-pull-down-refresh no-scroll-bar"
      style={{ height, marginBottom: '0' }}
      onScroll={ev => ev.target.scrollTop = 1}
    >
      {children}
    </div>
  );
}