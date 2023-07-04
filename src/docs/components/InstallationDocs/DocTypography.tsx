export const H1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h1 {...props} className="text-3xl font-semibold  md:text-5xl" />;
};

export const H2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 {...props} className=" text-2xl font-semibold md:text-4xl" />;
};

export const H3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      {...props}
      className="text-xl font-semibold text-neutral-500 md:text-2xl"
    />
  );
};

export const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...props} className="text-lg text-neutral-500 md:text-xl" />;
};
