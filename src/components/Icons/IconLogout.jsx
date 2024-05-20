export const IconLogout = ({ className, size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      className={`icon-logout ${className}`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 14.5H3.33333C2.97971 14.5 2.64057 14.3595 2.39052 14.1095C2.14048 13.8594 2 13.5203 2 13.1667V3.83333C2 3.47971 2.14048 3.14057 2.39052 2.89052C2.64057 2.64048 2.97971 2.5 3.33333 2.5H6"
        className="icon-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 11.8334L14.0003 8.50002L10.667 5.16669"
        className="icon-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.5H6"
        className="icon-stroke"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
