export const IconChevronUp = ({ className, color = 'white' }) => {
  return (
    <>
      <svg
        className={className}
        height="currentSize"
        width="currentSize"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12.5L10 7.5L15 12.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
