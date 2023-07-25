import { IconProps } from "./types";

export const ChevronRightIcon = ({ ...delegated }: IconProps) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    width="1.5rem"
    height="1.5rem"
    strokeWidth="1.5"
    stroke="currentColor"
    {...delegated}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
