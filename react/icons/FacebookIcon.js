import React from "react";

const FacebookIcon = ({ className = "size-6", ...props }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m9.58 21.7v-6.65h-2.06v-3.06h2.06v-1.32c0-3.4 1.54-4.98 4.88-4.98 0.334 0 0.796 0.035 1.22 0.0858a7.23 7.23 0 0 1 0.951 0.162v2.77a7.19 7.19 0 0 0-0.544-0.03 22.3 22.3 0 0 0-0.611-0.0075c-0.589 0-1.05 0.08-1.4 0.258a1.4 1.4 0 0 0-0.566 0.518c-0.215 0.35-0.312 0.829-0.312 1.46v1.08h3.27l-0.561 3.06h-2.7v6.87c4.95-0.598 8.79-4.81 8.79-9.93 0-5.52-4.48-10-10-10s-10 4.48-10 10c0 4.69 3.23 8.62 7.58 9.71z" />
  </svg>
);

export default FacebookIcon;
