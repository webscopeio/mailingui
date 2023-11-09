import { Container } from "@react-email/components";
import { Img, P, Grid, Cell } from "@mailingui/components";

export default function GridCardExample() {
  return (
    <Container style={container}>
      <Grid>
        <Cell width={20}>
          <Img
            compact
            alt="Total Hair Protection and Care"
            src="https://images.unsplash.com/photo-1600956054489-a23507c64a36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fFNoYW1wb298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            width="100%"
            style={{ borderRadius: "12px" }}
          />
        </Cell>
        <Cell width={80}>
          <Grid breakpoint={360} gap={0}>
            <Cell width={80}>
              <P small compact>
                Marquee Hair
              </P>
              <P style={{ lineHeight: 1.4 }} compact>
                <b>Total Hair Protection and Care</b>
              </P>
              <P compact small>
                Quantity: 1
              </P>
            </Cell>
            <Cell width={20}>
              <P compact style={{ textAlign: "right" }}>
                $149.99
              </P>
            </Cell>
          </Grid>
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
