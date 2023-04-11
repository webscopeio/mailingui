import mjml2html from "mjml";
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

export default function ComponentPage({
  params: { type },
}: ComponentPageProps) {
  const component = getComponent(type);

  return (
    <div className="px-4">
      <div className="mx-auto w-full max-w-[900px] ">
        <h1 className="pt-8 text-2xl font-semibold md:pt-16 md:text-4xl">
          {component.title}
        </h1>
        <div className="mt-8 space-y-16 md:mt-16">
          {component.examples.map(({ ...example }, index) => (
            <ComponentExample key={index} {...example} />
          ))}
        </div>
      </div>
    </div>
  );
}

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
  const component = emailComponents.find((c) => c.type === type);

  if (!component) {
    throw new Error(`No component for given type ${type} found.`);
  }

  const transformedExamples = component.examples.flatMap(({ title, mjml }) => {
    try {
      const { html, errors } = mjml2html(mjml, {
        /** `strict` validation throws if a wrong `mjml` is encountered. */
        validationLevel: "strict",
        keepComments: false,
      });

      if (errors.length > 0) {
        /** If the mjml parsing fails - for whatever reason - we filter the component out. */
        return [];
      }

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
  });

  return {
    title: component.title,
    examples: transformedExamples,
  };
};

export const generateStaticParams = () =>
  emailComponents.map((item) => ({ type: item.type }));
