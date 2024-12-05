import { IconProps } from "src/types/global.types";

const Chevron = ({ size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 4.5L6.5 7.5L9.75 4.5"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Chevron;
