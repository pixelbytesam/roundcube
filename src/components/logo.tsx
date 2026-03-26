import React from "react";

export default function CubeLogo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <svg
        width="240"
        height="240"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cube Shadow (same cube shape, offset) */}
        <g transform="translate(10, 10)" opacity="0.25">
          {/* Top */}
          <path d="M50 70 L100 40 L150 70 L100 100 Z" fill="#000" />
          {/* Left */}
          <path d="M50 70 L100 100 L100 150 L50 120 Z" fill="#000" />
          {/* Right */}
          <path d="M150 70 L100 100 L100 150 L150 120 Z" fill="#000" />
        </g>

        {/* Top Face */}
        <path
          d="M50 70 L100 40 L150 70 L100 100 Z"
          fill="#e78a6d"
        />

        {/* Left Face */}
        <path
          d="M50 70 L100 100 L100 150 L50 120 Z"
          fill="#c96549"
        />

        {/* Right Face */}
        <path
          d="M150 70 L100 100 L100 150 L150 120 Z"
          fill="#d97757"
        />

        {/* Infinity Loop */}
        <path
          d="M70 115
             C70 100, 95 100, 95 115
             C95 130, 70 130, 70 115
             M95 115
             C95 100, 120 100, 120 115
             C120 130, 95 130, 95 115"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
