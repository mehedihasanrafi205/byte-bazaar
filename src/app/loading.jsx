import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4 animate-spin">
          <Image
            src="/logo.png"
            alt="Logo"
            className="rounded-full"
            width={90}
            height={90}
          />
        </div>
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
