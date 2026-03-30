import React from "react";

export default function RotatingCubeRing() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Rotating Ring */}
        <div className="absolute w-52 h-52 border-4 border-blue-500 rounded-full animate-spin"></div>

        {/* Square Box */}
        <div className="w-32 h-32 bg-blue-500 shadow-2xl rounded-2xl flex items-center justify-center">
          <span className="text-white font-bold">BOX</span>
        </div>
      </div>
    </div>
  );
}
