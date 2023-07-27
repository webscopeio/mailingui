import { IconProps } from "./types";

export const ChevronLeftIcon = ({ ...delegated }: IconProps) => (
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
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
