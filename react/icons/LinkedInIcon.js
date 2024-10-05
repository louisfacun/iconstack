import React from "react";

const LinkedInIcon = ({ className = "size-6", ...props }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m19.6 3h-15.3a1.35 1.35 0 0 0-1.35 1.35v15.3a1.35 1.35 0 0 0 1.35 1.35h15.3a1.35 1.35 0 0 0 1.35-1.35v-15.3a1.35 1.35 0 0 0-1.35-1.35zm-11.3 15.3h-2.7v-8.1h2.7zm-1.35-9.68a1.58 1.58 0 1 1 1.62-1.58 1.6 1.6 0 0 1-1.62 1.58zm11.2 9.68h-2.7v-4.27c0-1.28-0.54-1.74-1.24-1.74a1.57 1.57 0 0 0-1.46 1.67 0.594 0.594 0 0 0 0 0.126v4.2h-2.7v-8.1h2.61v1.17a2.8 2.8 0 0 1 2.43-1.26c1.4 0 3.02 0.774 3.02 3.29z" />
  </svg>
);

export default LinkedInIcon;
