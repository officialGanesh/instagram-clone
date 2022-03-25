import React from "react";
import Image from "next/image";
import {
  HeartIcon,
  PaperAirplaneIcon,
  PlayIcon,
  PlusCircleIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/ModalAtom";

function Header() {
  const { data: session, status } = useSession();
  const [openModal, setOpenModal] = useRecoilState(modalState)

  return (
    <div className="bg-white border-b shadow-md sticky top-0 z-50 p-3 ">
      <div className="flex justify-between max-w-7xl lg:mx-auto">
        {/* Left */}
        <div className="relative w-28 cursor-pointer">
          <Image
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center */}
        <div className="flex items-center space-x-2 bg-gray-200 rounded-full sm:rounded-lg">
          <div className="p-3 sm:p-2 sm:ml-3 ">
            <SearchIcon className="h-5 text-gray-500 cursor-pointer sm:pointer-events-none" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 text-md font-extralight outline-none w-48 cursor-pointer hidden sm:flex"
          />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-5 justify-end">
          <HomeIcon className="navIcon" />
          {session ? (
            <>
              <PaperAirplaneIcon className="navIcon rotate-45" />
              <PlusCircleIcon className="navIcon" 
              onClick={() => {
                setOpenModal(true)
              }}
              />
              <PlayIcon className="navIcon" />
              <HeartIcon className="navIcon !mr-3" />
              <Image
                src={session?.user.image}
                alt="profile"
                height={40}
                width={40}
                className="object-contain h-8 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button
              className="text-sm text-blue-400 cursor-pointer font-semibold"
              onClick={signIn}
            >
              SIGN IN
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
