import React from "react";

import { Card, CardContent } from "./ui/card";

interface PostItemProps {
  id: string;
  title: string;
  excerpt: string;
}

const PostItem: React.FC<PostItemProps> = ({ id, title, excerpt }) => {
  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow">
      <CardContent>
        <a href={`/posts/${id}`} className="no-underline">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{excerpt}</p>
        </a>
      </CardContent>
    </Card>
  );
};

export default PostItem;