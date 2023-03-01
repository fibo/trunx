import React, { useEffect, FC, PropsWithChildren } from 'react';
// import Prism from "prismjs";
import { bulma } from 'trunx'
// import "prismjs/components/prism-jsx";

export const Code: FC<PropsWithChildren> = ({children}) => {
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  return <div className={bulma('mt-2', 'mb-2')}><pre><code>{children}</code></pre></div>
}
