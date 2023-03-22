export type IconButtonProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export const IconButton = ({
  className,
  onClick,
  children,
}: IconButtonProps) => (
  <button
    className={`flex h-10 w-10 items-center justify-center rounded-full bg-dark-800 text-dark-100 hover:opacity-70 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
