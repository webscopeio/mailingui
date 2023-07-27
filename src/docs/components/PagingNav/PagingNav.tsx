import { CTA } from "@components/CTA";
import { ChevronLeftIcon, ChevronRightIcon } from "@components/Icons";
import { cn } from "@utils/cn";

type LinkItem = {
  href: string;
  label: string;
};

type DocsPagingProps = {
  prev: LinkItem | null;
  next: LinkItem | null;
  className?: string;
};

export const PagingNav = ({ className, prev, next }: DocsPagingProps) => {
  if (!prev && !next) return null;

  return (
    <div className={cn("grid grid-cols-2 justify-between", className)}>
      {prev && (
        <CTA href={prev.href} color="black" className="place-self-start">
          <ChevronLeftIcon className="mr-2" />
          {prev.label}
        </CTA>
      )}
      {next && (
        <CTA
          href={next.href}
          color="black"
          className="col-start-2 place-self-end"
        >
          {next.label}
          <ChevronRightIcon className="ml-2" />
        </CTA>
      )}
    </div>
  );
};
