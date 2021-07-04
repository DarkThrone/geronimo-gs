import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import PostTitle from '../../components/post-title';
import mdxToHtml from '../../lib/mdxToHtml';
import { BlogPost } from '../../types/post';
import Title from '../../components/title';
import Code from '../../components/code';

type Props = {
  post: BlogPost;
  source: MDXRemoteSerializeResult;
  preview?: boolean;
};

const components = {
  code: Code,
};

const Post = ({ source, post, preview }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <Title title={post.title} />
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
            </article>
          </>
        )}
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
