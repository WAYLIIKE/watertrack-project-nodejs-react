export const IconChevronDown = ({ className, color = 'white', size = 20 }) => {
  return (
    <>
      <svg
        className={className}
        height={size}
        width={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
