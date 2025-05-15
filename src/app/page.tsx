'use client';

import React from "react";

import { usePostStore } from "@/store/postStore";
import PostList from "@/components/PostList";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { posts } = usePostStore();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Button variant="destructive">Hello, Tailwind CSS!</Button>

      <main className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">게시판 목록</h1>
        <PostList posts={posts} />
      </main>
    </>
  );
}
