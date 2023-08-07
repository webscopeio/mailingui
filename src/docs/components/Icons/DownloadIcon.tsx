import { IconProps } from "./types";

export const DownloadIcon = ({ ...delegated }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="1.25rem"
    height="1.25rem"
    {...delegated}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
);
