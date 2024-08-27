import { ReactNode } from 'react';
import { PostItContainer } from './post-it-style';

interface PostItProps {
  children: ReactNode;
}

export function PostIt({ children }: PostItProps) {
  return <PostItContainer>{children}</PostItContainer>;
}
