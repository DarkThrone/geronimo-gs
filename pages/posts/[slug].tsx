import readingTime from 'reading-time';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { BLOG_TITLE } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import { BlogPost } from '../../types/post';

type Props = {
  post: BlogPost;
  preview?: boolean;
};

const Post = ({ post, preview }: Props) => {
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
                <title>
                  {post.title}
                  {' '}
                  |
                  {BLOG_TITLE}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);

  const timeToRead = readingTime(post.content);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        timeToRead,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((_posts) => ({
      params: {
        slug: _posts.slug,
      },
    })),
    fallback: false,
  };
}
