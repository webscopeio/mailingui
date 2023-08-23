import * as React from "react";

export function DynamicCode({ textContent, installName, children }: {textContent: string, installName: string, children: React.ReactNode}) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll("span.line span");
      elements.forEach((el)=> {if(el.textContent === textContent){
        el.textContent = ` [options] ${installName}`;
      }})
    }
  }, [installName, textContent]);
  
  return <div ref={ref}>{children}</div>;
}