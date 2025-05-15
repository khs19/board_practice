import React from "react";
import PostItem from "./PostItem";

interface Post {
  id: string;
  title: string;
  excerpt: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <p className="text-center text-gray-500">게시글이 없습니다.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          title={post.title}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
};

export default PostList;