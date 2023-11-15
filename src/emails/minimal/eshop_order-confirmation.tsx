import * as React from "react";

import OrderConfirmation from "./eshop_order-confirmation.mdx";

import { getSharedMDXComponents } from "./shared/styles";
import { theme } from "./shared/theme";
import { OrderItemType } from "./shared/components/OrderItem";

import { getMDXComponents } from "@mailingui/utils";

export type OrderConfirmationEmailProps = {
  preview: string;
  firstName: string;
  orderNo: string;
  items: OrderItemType[];
  total: string;
  orderUrl: string;
};

export default function Email({
  orderNo = "N7241A1249S",
  preview = `Your order ${orderNo} is confirmed!`,
  firstName = "Jacob",
  items = ITEMS_MOCK,
  total = "$1,099.94",
  orderUrl = "https://company.com/order/id_123",
}: OrderConfirmationEmailProps) {
  return (
    <OrderConfirmation
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      orderNo={orderNo}
      items={items}
      total={total}
      orderUrl={orderUrl}
    />
  );
}

export const ITEMS_MOCK: OrderItemType[] = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1600956054489-a23507c64a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fFNoYW1wb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Marquee Hair",
    qty: 1,
    title: "Total Hair Protection and Care",
    price: "$149.99",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1629198726018-604230bdb091?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fEJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Glossier",
    qty: 2,
    title: "Milky Jelly Cleanser",
    price: "$99.99",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1629198735660-e39ea93f5c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEJlYXV0eSUyMHByb2R1Y3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Glossier",
    qty: 3,
    title: "Exfoliating Skin Perfector",
    price: "$249.99",
  },
];
