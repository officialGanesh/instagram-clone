import React from 'react'
import Post from './Post'

function Posts() {
  const dummy_posts = [
    {
      id:1,
      username:"Ganesh",
      profileImg:"https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo",
      img:"https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo",
      caption:"This is dummy post"
    },
    {
      id:2,
      username:"Ganesh",
      profileImg:"https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo",
      img:"https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo",
      caption:"This is dummy post"
    },
    {
      id:3,
      username:"Ganesh",
      profileImg:"https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo",
      img:"https://lh3.googleusercontent.com/ogw/ADea4I6v19AavCMiVveRiMmjMcF9N7sbF4fnx6D3nBDw=s32-c-mo",
      caption:"This is dummy post"
    }
  ]
  return (
    <div>
      {
        dummy_posts.map((post)=>(
          <Post key={post.id}
          username={post.username}
          profileImg={post.profileImg}
          avatar={post.img}
          caption={post.caption}
          />
        ))
      }
    </div>
  )
}

export default Posts