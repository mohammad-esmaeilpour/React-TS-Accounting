import { IconProps } from 'src/types/global.types';

const IncreaseIcon = ({size,color}:IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 10 16"
      fill="none"
    >
      <path
        d="M0 16V14H10V16H0ZM4 12V3.825L1.4 6.4L0 5L5 0L10 5L8.6 6.4L6 3.825V12H4Z"
        fill={color || "#4880FF"}
      />
    </svg>
  );
}

export default IncreaseIcon