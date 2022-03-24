import React, { useState, useEffect } from "react";
import faker from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [services, setServices] = useState([
    "About",
    "Help",
    "Press",
    "Jobs",
    "Privacy",
    "Terms",
    "Hashtags",
    "Language",
  ]);
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-12">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600 cursor-pointer">
          See All
        </button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between cursor-pointer space-x-3"
        >
          <img
            src={profile.avatar}
            alt=""
            className="w-10 h-10 rounded-full border p-[2px]
                    border-red-600"
          />

          <div className="flex-1">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-blue-400 text-xs font-bold">Follow</button>
        </div>
      ))}
      <div className="mt-7 ml-3">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            {services.map((e, i) => (
              <p key={i} className="text-xs text-gray-400 cursor-pointer">
                {e}
              </p>
            ))}
          </div>

          <p className="text-xs font-medium text-gray-400">
            @ 2022 INSTAGRAM FROM META
          </p>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
