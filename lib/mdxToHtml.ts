import { serialize } from 'next-mdx-remote/serialize';

export type FrontMatter = {
  [key: string]: any;
};

export type MdxContent = {
  content: string;
  frontMatter: FrontMatter;
};

export default async function mdxToHtml({ content, frontMatter }: MdxContent) {
  return serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  });
}
