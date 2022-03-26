import React from "react";
import Image from "next/image";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Post({ username, profileImg, avatar, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* post-header */}
      <div className="flex items-center p-5">
        <Image
          src={profileImg}
          alt=""
          height={40}
          width={40}
          className="rounded-full   object-contain border p-[1.5px] mr-3 border-red-600"
        />
        <p className="flex-1 font-bold ml-4">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* avatar-posted */}
      <div className="flex-1 font-medium  ml-3 my-2">
        <p className="text-sm text-gray-600 ">{caption}</p>
      </div>
      <div className="relative h-56 md:h-96 bg-white">
        <Image
          src={avatar}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-xs"
        />
      </div>

      <div className="flex justify-between px-4  pt-4 my-3 bg-white">
        <div className="flex space-x-4">
          <HeartIcon className="postIcons" />
          <ChatIcon className="postIcons" />
          <PaperAirplaneIcon className="postIcons" />
        </div>
        <BookmarkIcon className="postIcons" />
      </div>
    </div>
  );
}

export default Post;
