import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Newsletter from '@/components/Newsletter';
import Container from '@/components/container';
import PostBody from '@/components/post-body';
import PostHeader from '@/components/post-header';
import Layout from '@/components/layout';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import mdxToHtml from '@/lib/mdxToHtml';
import { BlogPost } from '@/types/post';
import Code from '@/components/code';
import { BLOG_TITLE } from '@/lib/constants';

type Props = {
  post: BlogPost;
  source: MDXRemoteSerializeResult;
  preview?: boolean;
};

const components = {
  code: Code,
  br: <br />,
};

const Post = ({ source, post, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <article className="mb-32">
          <Head>
            <title>
              {post.title} | {BLOG_TITLE}{' '}
            </title>
          </Head>
          <PostHeader
            title={post.title}
            date={post.date}
            author={post.author}
            timeToRead={post.timeToRead}
          />
          <PostBody>
            <MDXRemote {...source} components={components} />
          </PostBody>
          <Newsletter
            form={{
              id: 2531677,
              title: 'Wanna hear more?',
              subTitle:
                'I sent an email every once in a while, I try not to be spammy. Usually when a few articles have been released!',
            }}
          />
        </article>
      </Container>
    </Layout>
  );
};

Post.defaultProps = {
  preview: false,
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(`${params.slug}.mdx`);
  const { content, frontMatter } = post;
  const source = await mdxToHtml({
    content,
    frontMatter,
  });

  return {
    props: {
      source,
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPosts().map(({ slug }) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
