import { useEffect, useLayoutEffect } from 'react';
import './PreventPullDownRefresh.css';

export default function PreventPullDownRefresh({ children }) {
  useEffect(() => console.log('useEffect1', children), []);
  useEffect(() => console.log('useEffect2', children), [children]);
  useLayoutEffect(() => console.log('useLayoutEffect1', children), [])
  useLayoutEffect(() => console.log('useLayoutEffect2', children), [children])
  return (
    <div className="prevent-pull-down-refresh">
      {children}
    </div>
  );
}