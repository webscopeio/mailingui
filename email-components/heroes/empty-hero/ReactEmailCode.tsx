import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Section className="bg-white mr-auto">
          <Container
            className="w-[578px] h-[358px] mx-auto my-2.5 rounded-[22px] overflow-hidden bg-hero bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url(https://www.linkpicture.com/q/img_4_4.png)",
            }}
          ></Container>
        </Section>
      </Tailwind>
    </Html>
  );
}
