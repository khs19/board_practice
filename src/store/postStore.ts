import { create } from "zustand";

interface Post {
  id: string;
  title: string;
  excerpt: string;
}

interface PostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [
    { id: "1", title: "첫 번째 글", excerpt: "이것은 첫 번째 게시글의 요약입니다." },
    { id: "2", title: "두 번째 글", excerpt: "두 번째 게시글의 간단한 설명이 들어갑니다." },
  ],
  setPosts: (posts) => set({ posts }),
}));