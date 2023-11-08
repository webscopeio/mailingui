import { Container } from "@react-email/components";
import { Grid, Cell, P } from "@mailingui/components";

export default function GridDataExample() {
  return (
    <Container style={container}>
      <Grid gap={6}>
        <Cell width={50} align="top">
          <P compact muted>
            Order Date
          </P>
          <P compact>January 25th, 2024</P>
        </Cell>
        <Cell width={50} align="top">
          <P compact muted>
            Order Number
          </P>
          <P compact>N7241A1249S</P>
        </Cell>
      </Grid>
    </Container>
  );
}

// Styles
const container = {
  maxWidth: 280,
  margin: "16px 0",
};
