import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

function MiniProfile() {
  const { data: session, status } = useSession();
  
  return (
    <div className="flex items-center justify-center mt-14 ml-12">
      <Image
        src={session?.user.image}
        alt=""
        height={50}
        width={50}
        className="cursor-pointer rounded-full object-contain"
      />

      <div className="flex mx-4 flex-col">
        <h2 className="font-bold ">{session?.user.username}</h2>
        <h3 className="text-xs text-gray-400 font-semibold">
          Welcome to Instagram
        </h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold ml-10 cursor-pointer" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
