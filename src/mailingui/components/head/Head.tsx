import React, { ComponentPropsWithoutRef, FC } from "react";
import { Head as ReactEmailHead } from "@react-email/components";
import { getCssText } from "@mailingui/utils";

type HeadProps = ComponentPropsWithoutRef<"head">;

const Head: FC<HeadProps> = ({ children, ...props }) => {
  return (
    <ReactEmailHead {...props}>
      <style
        id="stitches"
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: getCssText(),
        }}
      />
      {children}
    </ReactEmailHead>
  );
};

export { Head };
