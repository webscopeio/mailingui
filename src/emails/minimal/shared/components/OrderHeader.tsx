import { theme } from "../theme";

import { Grid, Cell } from "@mailingui/components";
import * as components from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";

const { P } = applyTheme(components, theme);

export const OrderHeader = ({
  date,
  orderNo,
  address,
}: {
  date: string;
  orderNo: string;
  address: string;
}) => {
  return (
    <Grid breakpoint={480} gap={12}>
      <Cell width={32} align="top">
        <P compact muted>
          Order Date
        </P>
        <P compact>{date}</P>
      </Cell>
      <Cell width={32} align="top">
        <P compact muted>
          Order Number
        </P>
        <P compact>{orderNo}</P>
      </Cell>
      <Cell width={36} align="top">
        <P compact muted>
          Address
        </P>
        <P compact>{address}</P>
      </Cell>
    </Grid>
  );
};
