import { theme } from "../theme";

import * as components from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";
import { Grid, Cell } from "@mailingui/components";

const { P } = applyTheme(components, theme);

export const OrderTotal = ({
  total,
  subTotal,
  shipping,
  discount,
}: {
  total: string;
  subTotal?: string;
  shipping?: string;
  discount?: string;
}) => {
  return (
    <>
      {subTotal && (
        <Grid breakpoint={320} gap={0}>
          <Cell width={20}>
            <P compact>Subtotal</P>
          </Cell>
          <Cell width={80}>
            <P compact style={{ textAlign: "right" }}>
              {subTotal}
            </P>
          </Cell>
        </Grid>
      )}
      {shipping && (
        <Grid breakpoint={320} gap={0}>
          <Cell width={20}>
            <P compact>Shipping</P>
          </Cell>
          <Cell width={80}>
            <P compact style={{ textAlign: "right" }}>
              {shipping}
            </P>
          </Cell>
        </Grid>
      )}
      {discount && (
        <Grid breakpoint={320} gap={0}>
          <Cell width={20}>
            <P compact>Discount</P>
          </Cell>
          <Cell width={80}>
            <P compact style={{ textAlign: "right" }}>
              {discount}
            </P>
          </Cell>
        </Grid>
      )}
      <Grid breakpoint={320} gap={0}>
        <Cell width={20}>
          <P compact>
            <b>Total</b>
          </P>
        </Cell>
        <Cell width={80}>
          <P compact style={{ textAlign: "right" }}>
            <b>{total}</b>
          </P>
        </Cell>
      </Grid>
    </>
  );
};
