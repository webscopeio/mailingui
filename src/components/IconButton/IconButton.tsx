export type IconButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "className"
>;

export const IconButton = ({ ...delegated }: IconButtonProps) => (
  <button
    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-dark-800 text-dark-100 hover:opacity-80"
    {...delegated}
  />
);
