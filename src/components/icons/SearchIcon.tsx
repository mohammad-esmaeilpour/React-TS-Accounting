import { IconProps } from "src/types/global.types";

const SearchIcon = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
    >
      <path
        d="M11.0221 20.1263C16.0502 20.1263 20.1263 16.0502 20.1263 11.0221C20.1263 5.99404 16.0502 1.91797 11.0221 1.91797C5.99404 1.91797 1.91797 5.99404 1.91797 11.0221C1.91797 16.0502 5.99404 20.1263 11.0221 20.1263Z"
        stroke={color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0846 21.0846L19.168 19.168"
        stroke={color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon