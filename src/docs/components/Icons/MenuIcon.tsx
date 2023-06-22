import { IconProps } from "./types";

export const MenuIcon = ({ ...delegated }: IconProps) => (
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
      d="M21 6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1s.44772 1 1 1h16c.5523 0 1-.44772 1-1Zm0 6c0-.5523-.4477-1-1-1h-8c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1Zm0 6c0-.5523-.4477-1-1-1H4c-.55228 0-1 .4477-1 1s.44772 1 1 1h16c.5523 0 1-.4477 1-1Z"
    />
  </svg>
);
