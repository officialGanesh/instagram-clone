import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useSession } from "next-auth/react";
import { onSnapshot, orderBy, query } from "firebase/firestore";
import { colRef, db } from "../firebase";

function Posts() {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    return onSnapshot(
      query(colRef),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div>
      {session &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            profileImg={post.data().profileImg}
            avatar={post.data().image}
            caption={post.data().caption}
          />
        ))}
    </div>
  );
}

export default Posts;
