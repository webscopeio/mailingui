import { Section } from "@react-email/components";

import { theme } from "../theme";
import { baseUrl } from "../assets";

import * as components from "@mailingui/components";
import { applyTheme } from "@mailingui/utils";

const { IconRow } = applyTheme(components, theme);

export const Rating = () => {
  return (
    <Section style={{ paddingBottom: "32px" }}>
      <IconRow
        align="center"
        iconWidth={56}
        iconHeight={56}
        icons={[
          {
            href: "#",
            src: `${baseUrl}/rating/worst.png`,
            text: "Worst",
          },
          {
            href: "#",
            src: `${baseUrl}/rating/poor.png`,
            text: "Poor",
          },
          {
            href: "#",
            src: `${baseUrl}/rating/average.png`,
            text: "Average",
          },
          {
            href: "#",
            src: `${baseUrl}/rating/good.png`,
            text: "Good",
          },
          {
            href: "#",
            src: `${baseUrl}/rating/excelent.png`,
            text: "Excelent",
          },
        ]}
      />
    </Section>
  );
};
