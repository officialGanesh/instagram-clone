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
        <img
          src={profileImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-[1.5px] mr-3 border-red-600"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* avatar-posted */}
      <div className="relative h-56">
        <Image
          src={avatar}
          alt=""
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>

      <div className="flex justify-between px-4 pt-4">
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
