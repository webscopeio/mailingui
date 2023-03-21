import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export default function Email() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Section className="bg-white mr-auto p-[10px]">
          <Container
            className="w-[558px] h-[338px] mx-auto my-2.5 rounded-[22px] overflow-hidden bg-hero bg-no-repeat bg-cover bg-center p-[10px]"
            style={{
              backgroundImage: "url(https://www.linkpicture.com/q/img_4_4.png)",
            }}
          >
            <Section className="h-[135px] bg-black pl-6 rounded-[10px]">
              <Section>
                <Img
                  className="mx-auto inline-block"
                  src="https://www.linkpicture.com/q/white_heart.png"
                  width="25"
                  height="22"
                  alt="heart"
                />
                <span className="text-white pl-2 align-top">Your logo</span>
              </Section>
              <Section>
                <Text className="text-white text-2xl font-bold">
                  New office for your company
                </Text>
              </Section>
            </Section>
          </Container>
        </Section>
      </Tailwind>
    </Html>
  );
}
