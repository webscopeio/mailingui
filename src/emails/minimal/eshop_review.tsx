import * as React from "react";

import Review from "./eshop_review.mdx";

import { theme } from "./shared/theme";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type OrderDeliveredEmailProps = {
  preview: string;
  firstName: string;
  orderNo: string;
  feedbackUrl: string;
};

export default function Email({
  orderNo = "N7241A1249S",
  preview = `Your order ${orderNo} has been delivered!`,
  firstName = "Jacob",
  feedbackUrl = "https://company.com/reset",
}: OrderDeliveredEmailProps) {
  return (
    <Review
      components={getMDXComponents({
        components: getSharedMDXComponents({ feedbackFooter: true }),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      orderNo={orderNo}
      feedbackUrl={feedbackUrl}
    />
  );
}
