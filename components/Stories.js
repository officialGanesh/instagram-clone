import React, { useEffect, useState } from "react";
import Story from "./Story";
import { faker } from "@faker-js/faker";

function Stories() {
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(15)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setUserArray(suggestions);
  }, []);

  return(
      <div className='flex space-x-2 p-5 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
          {
              userArray.map((user)=>(
                  <Story 
                  key={user.id}
                  img={user.avatar}
                  userName={user.username}
                  />
              ))
          }
      </div>
  );
}

export default Stories;
