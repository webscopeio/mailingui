import * as React from "react";

import AbandonedCart from "./eshop_abandoned-cart.mdx";

import { getSharedMDXComponents } from "./shared/styles";
import { theme } from "./shared/theme";
import { OrderItemType } from "./shared/components/OrderItem";

import { getMDXComponents } from "@mailingui/utils";

export type AbandonedCartEmailProps = {
  preview: string;
  firstName: string;
  items: OrderItemType[];
  total: string;
  cartUrl: string;
};

export default function Email({
  preview = "Your cart is missing you!",
  firstName = "Jacob",
  items = ITEMS_MOCK,
  cartUrl = "https://company.com/cart",
}: AbandonedCartEmailProps) {
  return (
    <AbandonedCart
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      items={items}
      cartUrl={cartUrl}
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
