const SvgIcon = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 1.64282V12.3571"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.64307 7H12.3574"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconPlusWater = ({ isPrimary = true, size = 14, className }) => {
  const icon = <SvgIcon size={size} className={className} />;

  return isPrimary ? icon : <div>{icon}</div>;
};
