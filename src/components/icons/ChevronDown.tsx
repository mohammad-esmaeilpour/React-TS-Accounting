import { IconProps } from "src/types/global.types";

const ChevronDown = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 9 5"
      fill={'none'}
    >
      <path
        d="M1.25 0.875L4.5 4.125L7.75 0.875"
        stroke={color || 'black'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown