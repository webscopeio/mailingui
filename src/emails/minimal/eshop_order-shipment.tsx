import * as React from "react";

import OrderShipment from "./eshop_order-shipment.mdx";

import { theme } from "./shared/theme";
import { OrderItemType } from "./shared/components/OrderItem";
import { getSharedMDXComponents } from "./shared/styles";

import { getMDXComponents } from "@mailingui/utils";

export type OrderShipmentEmailProps = {
  preview: string;
  firstName: string;
  orderNo: string;
  items: OrderItemType[];
  orderUrl: string;
  subTotal: string;
  shipping: string;
  discount?: string;
  total: string;
  address: string;
  date: string;
  trackingUrl: string;
};

export default function Email({
  orderNo = "N7241A1249S",
  preview = `Your order ${orderNo} has been delivered!`,
  address = "2715 Ash Dr. San Jose, South Dakota 83475",
  date = "25 January, 2022",
  firstName = "Jacob",
  items = ITEMS_MOCK,
  subTotal = "$1,099.94",
  shipping = "$9.99",
  discount = "-5% ($54.99)",
  total = "$1,054.94",
  trackingUrl = `https://company.com/tracking/${orderNo}`,
}: OrderShipmentEmailProps) {
  return (
    <OrderShipment
      components={getMDXComponents({
        components: getSharedMDXComponents({}),
        theme,
      })}
      preview={preview}
      firstName={firstName}
      orderNo={orderNo}
      address={address}
      date={date}
      items={items}
      subTotal={subTotal}
      shipping={shipping}
      discount={discount}
      total={total}
      trackingUrl={trackingUrl}
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
