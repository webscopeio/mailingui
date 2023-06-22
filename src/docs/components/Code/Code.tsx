"use client";

import * as React from "react";

interface CodeProps
  extends Omit<
    React.ComponentPropsWithoutRef<"div">,
    "dangerouslySetInnerHTML"
  > {
  htmlCode: string;
}

export const Code = React.forwardRef<React.ElementRef<"div">, CodeProps>(
  ({ htmlCode, ...props }, ref) => (
    <div ref={ref} dangerouslySetInnerHTML={{ __html: htmlCode }} {...props} />
  )
);
Code.displayName = "Code";
