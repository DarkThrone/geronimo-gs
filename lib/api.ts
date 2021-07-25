import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { FrontMatter } from './mdxToHtml';

const postsDirectory = join(process.cwd(), '_posts');

// Get mdx slugs
export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((path) => /^[^!]+\.mdx?$/.test(path));
}

const getPostData = (slug: string) => ({
  source: fs.readFileSync(join(postsDirectory, slug)),
  realSlug: slug.replace(/\.mdx?$/, ''),
});

export type Author = {
  name: string;
  picture: string;
};

export type Post = {
  title: string;
  author: Author;
  date: string;
  slug: string;
  content: string;
  excerpt: string;
  timeToRead: number;
  frontMatter: FrontMatter;
};

export function getPostBySlug(slug: string) {
  const { realSlug, source } = getPostData(slug);
  const { content, data } = matter(source);

  const { title, author, date, excerpt } = data;

  return {
    title,
    author,
    date,
    excerpt,
    slug: realSlug,
    content,
    timeToRead: readingTime(content).minutes,
    frontMatter: data,
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
