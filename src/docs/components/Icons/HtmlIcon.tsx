import { IconProps } from "./types";

export const HtmlIcon = ({ ...delegated }: IconProps) => (
  <svg
    viewBox="0 0 20 20"
    width="1.5rem"
    height="1.5rem"
    stroke="currentColor"
    {...delegated}
  >
    <g strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)">
      <path d="M16.6673 3.33325 15.0007 15.4166l-5 1.6667-5.00005-1.6667L3.33398 3.33325H16.6673Z" />
      <path d="M12.9173 6.66675H7.08398l.41667 3.33335h5.00005l-.4167 2.9166-2.0833.625-2.08338-.625-.08334-.4166" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
