import { theme } from "../theme";

import * as components from "@mailingui/components";
import { Grid, Cell } from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";

const { Img, P } = applyTheme(components, theme);

export type OrderItemType = {
  imageSrc: string;
  category: string;
  qty: number;
  title: string;
  price: string;
  index?: number;
};

export const OrderItem = ({
  imageSrc,
  category,
  qty,
  title,
  price,
  index = 0,
}: OrderItemType) => {
  return (
    <>
      {index !== 0 && <br />}
      <Grid>
        <Cell width={20}>
          <Img compact alt={title} src={imageSrc} width="100%" />
        </Cell>
        <Cell width={80}>
          <Grid breakpoint={360} gap={0}>
            <Cell width={80}>
              <P small compact>
                {category}
              </P>
              <P style={{ lineHeight: 1.4 }} compact>
                <b>{title}</b>
              </P>
              <P compact small>
                Quantity: {qty}
              </P>
            </Cell>
            <Cell width={20}>
              <P compact style={{ textAlign: "right" }}>
                {price}
              </P>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </>
  );
};
