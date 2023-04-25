import mjml2html from "mjml";
import { format } from "prettier";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ComponentExample,
  ComponentExampleProps,
} from "@components/ComponentExample";
import { emailComponents } from "@constants";

type ComponentPageProps = {
  params: {
    type: string;
  };
};

export function generateMetadata({
  params: { type },
}: ComponentPageProps): Metadata {
  const component = getComponentData(type);
  return {
    title: component?.title ?? "Components",
    description: "Explore components",
    openGraph: {
      title: component?.title ?? "Components",
      description: "Explore components",
      url: "https://mailingui.vercel.app/components",
      images: [
        {
          url: "/static/images/og/components.png",
          width: 1200,
          height: 630,
        },
      ],
      siteName: "MailingUI",
      locale: "en-US",
      type: "website",
    },
  };
}

export default function ComponentPage({
  params: { type },
}: ComponentPageProps) {
  const component = getComponent(type);

  return (
    <div className="mx-auto w-full max-w-[900px] overflow-x-hidden px-4">
      <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
        {component.title}
      </h1>
      <div className="mt-8 space-y-16 md:mt-16">
        {component.examples.map(({ ...example }, index) => (
          <ComponentExample key={index} {...example} />
        ))}
      </div>
    </div>
  );
}

/**
 * Finds a match for the component type or calls a navigation error
 * @param type - A type of component. Same as `type` param of the page.
 * @returns an object containing the email component
 */
const getComponentData = (type: string) => {
  const component = emailComponents.find((c) => c.type === type);
  if (!component) {
    return notFound();
  }
  return component;
};

/**
 * Maps over mjml examples, translates them to html, and puts them together.
 * @param type - A type of component. Same as `type` param of the page.
 * @returns An object containing component title and array of component examples in mjml and html.
 */
const getComponent = (
  type: string
): {
  title: string;
  examples: ComponentExampleProps[];
} => {
  const component = getComponentData(type);

  const transformedExamples = component.examples.flatMap(
    ({ title, mjml: inputMjml }) => {
      try {
        const htmlOutput = mjml2html(inputMjml, {
          /** `strict` validation throws if a wrong `mjml` is encountered. */
          validationLevel: "strict",
          keepComments: false,
        });

        if (htmlOutput.errors.length > 0) {
          /** If the mjml parsing fails - for whatever reason - we filter the component out. */
          return [];
        }

        /** `mjml` beautify has been deprecated, format using default `prettier` */
        const html = format(htmlOutput.html, { parser: "html" });
        const mjml = format(inputMjml, { parser: "html" });

        return [
          {
            title,
            mjml,
            html,
          },
        ];
      } catch (error) {
        /** If the mjml parsing fails - for whatever reason - we filter the component out. */
        return [];
      }
    }
  );

  return {
    title: component.title,
    examples: transformedExamples,
  };
};

export const generateStaticParams = () =>
  emailComponents.map((item) => ({ type: item.type }));
