import Author from './author';

type WithReadingTime = {
  timeToRead: number;
};

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
};

export type BlogPost = PostType & WithReadingTime;

export default PostType;
