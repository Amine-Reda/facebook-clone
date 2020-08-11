import React, { useEffect, useState } from "react";
import getPosts from "../api/getPosts";
import SinglePost from "./SinglePost";
import { postRef } from "../firebase";

export default () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      postRef.on("value", snap => {
        var fetchedPosts = [];
        snap.forEach(singlePost => {
          fetchedPosts.push({ ...singlePost.val(), postKey: singlePost.key });
        });
        setPosts(fetchedPosts);
      });
    };
    getAllPosts();
  }, []);

  return (
    <div>
      {posts.map(singlePost => (
        <SinglePost details={singlePost} key={singlePost.content} />
      ))}
    </div>
  );
};
