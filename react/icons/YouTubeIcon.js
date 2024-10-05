import React from "react";

const YouTubeIcon = ({ className = "size-6", ...props }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m21.6 7.17a2.51 2.51 0 0 0-1.77-1.78c-1.56-0.421-7.81-0.421-7.81-0.421s-6.25 0-7.81 0.421a2.51 2.51 0 0 0-1.77 1.78c-0.418 1.57-0.418 4.85-0.418 4.85s0 3.28 0.418 4.84a2.51 2.51 0 0 0 1.77 1.78c1.56 0.421 7.81 0.421 7.81 0.421s6.25 0 7.81-0.421a2.51 2.51 0 0 0 1.77-1.78c0.418-1.57 0.418-4.84 0.418-4.84s0-3.28-0.418-4.85zm-11.6 7.82v-5.95l5.23 2.97z" />
  </svg>
);

export default YouTubeIcon;
