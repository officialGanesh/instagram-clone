import React from "react";
import Image from "next/image";

function MiniProfile() {
  return (
    <div className="flex items-center justify-center mt-14 ml-12">
      <Image
        src="https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo"
        alt=""
        height={50}
        width={50}
        className="cursor-pointer rounded-full object-contain"
      />

      <div className="flex mx-4 flex-col">
        <h2 className="font-bold ">ganeshkumar</h2>
        <h3 className="text-xs text-gray-400 font-semibold">
          Welcome to Instagram
        </h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold ml-10 cursor-pointer">
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
