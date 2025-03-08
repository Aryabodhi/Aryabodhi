import React from 'react';

const ZenEnso = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 75 35
         C 75 15, 60 10, 40 10
         C 20 10, 10 25, 10 45
         C 10 65, 25 80, 45 80
         C 65 80, 80 65, 80 45
         C 80 42, 79.5 39, 78.5 36.5
         C 77.5 34, 76 32, 74 30.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-all duration-700"
      style={{
        strokeDasharray: "400",
        strokeDashoffset: "0",
        animation: "draw 2s ease-out"
      }}
    />
  </svg>
);

export default ZenEnso;