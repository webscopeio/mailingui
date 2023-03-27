import { IconProps } from "./types";

export const CopyIcon = ({ ...delegated }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1.5rem"
    height="1.5rem"
    {...delegated}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 5a1.00003 1.00003 0 0 0-1 1v8a.99997.99997 0 0 0 1 1h1v-5a3 3 0 0 1 3-3h5V6a.99997.99997 0 0 0-1-1H6Zm11 2V6a3.00006 3.00006 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3.00002 3.00002 0 0 0 3 3h1v1a3.00006 3.00006 0 0 0 3 3h8a2.9999 2.9999 0 0 0 2.1213-.8787A2.9999 2.9999 0 0 0 21 18v-8a3.00006 3.00006 0 0 0-3-3h-1Zm-7 2a1.00003 1.00003 0 0 0-1 1v8a.99997.99997 0 0 0 1 1h8c.2652 0 .5196-.1054.7071-.2929A1.0001 1.0001 0 0 0 19 18v-8a.99997.99997 0 0 0-1-1h-8Z"
    />
  </svg>
);
