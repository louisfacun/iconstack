import React from "react";

const XTwitterIcon = ({ className = "size-6", ...props }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m17.7 3h3.05l-6.67 7.63 7.85 10.4h-6.15l-4.81-6.29-5.51 6.29h-3.06l7.14-8.16-7.53-9.84h6.3l4.35 5.75zm-1.07 16.2h1.69l-10.9-14.4h-1.82z" />
  </svg>
);

export default XTwitterIcon;
