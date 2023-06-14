import { IconProps } from "./types";

export const BackIcon = ({ ...delegated }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="1.75"
    stroke="currentColor"
    width="1.5rem"
    height="1.5rem"
    {...delegated}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    />
  </svg>
);
