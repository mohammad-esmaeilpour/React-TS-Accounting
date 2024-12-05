import { IconProps } from "src/types/global.types";

const CloseCircleIcon = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6" clipPath="url(#clip0_256_11531)">
        <path
          d="M14.5 27.1875C11.1351 27.1875 7.90795 25.8508 5.52858 23.4714C3.14921 21.092 1.8125 17.8649 1.8125 14.5C1.8125 11.1351 3.14921 7.90795 5.52858 5.52858C7.90795 3.14921 11.1351 1.8125 14.5 1.8125C17.8649 1.8125 21.092 3.14921 23.4714 5.52858C25.8508 7.90795 27.1875 11.1351 27.1875 14.5C27.1875 17.8649 25.8508 21.092 23.4714 23.4714C21.092 25.8508 17.8649 27.1875 14.5 27.1875ZM14.5 29C18.3456 29 22.0338 27.4723 24.753 24.753C27.4723 22.0338 29 18.3456 29 14.5C29 10.6544 27.4723 6.96623 24.753 4.24695C22.0338 1.52767 18.3456 0 14.5 0C10.6544 0 6.96623 1.52767 4.24695 4.24695C1.52767 6.96623 0 10.6544 0 14.5C0 18.3456 1.52767 22.0338 4.24695 24.753C6.96623 27.4723 10.6544 29 14.5 29Z"
          fill={color || "black"}
        />
        <path
          d="M19.0279 9.5631C19.1848 9.71994 19.2729 9.93267 19.2729 10.1545C19.2729 10.3763 19.1848 10.589 19.0279 10.7459L15.4796 14.2942L19.0279 17.8425C19.1848 17.9993 19.2729 18.212 19.2729 18.4338C19.2729 18.6557 19.1848 18.8684 19.0279 19.0252C18.8711 19.1821 18.6584 19.2702 18.4366 19.2702C18.2147 19.2702 18.002 19.1821 17.8452 19.0252L14.2969 15.4769L10.7486 19.0252C10.5917 19.1821 10.379 19.2702 10.1572 19.2702C9.93538 19.2702 9.72265 19.1821 9.56581 19.0252C9.40897 18.8684 9.32085 18.6557 9.32085 18.4338C9.32085 18.212 9.40897 17.9993 9.56581 17.8425L13.1141 14.2942L9.56581 10.7459C9.40897 10.589 9.32085 10.3763 9.32085 10.1545C9.32085 9.93267 9.40897 9.71994 9.56581 9.5631C9.72265 9.40625 9.93538 9.31814 10.1572 9.31814C10.379 9.31814 10.5917 9.40625 10.7486 9.5631L14.2969 13.1114L17.8452 9.5631C18.002 9.40625 18.2147 9.31814 18.4366 9.31814C18.6584 9.31814 18.8711 9.40625 19.0279 9.5631Z"
          fill={color || "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_256_11531">
          <rect width="29" height="29" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseCircleIcon