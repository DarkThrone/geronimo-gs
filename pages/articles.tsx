import Head from 'next/head';
import Layout from '@/components/layout';
import Container from '@/components/container';
import PostPreview from '@/components/post-preview';
import { getAllPosts } from '@/lib/api';
import { BLOG_TITLE } from '@/lib/constants';
import { BlogPost } from '@/types/post';

type Props = {
  allPosts: BlogPost[];
};

const Index = ({ allPosts }: Props) => (
  <>
    <Layout>
      <Head>
        <title>
          {BLOG_TITLE}
          &apos;s Blog
        </title>
      </Head>
      <Container>
        {allPosts.length > 0 && (
          <section>
            <div className="max-w-2xl m-auto">
              {allPosts.map(({ date, title, slug, excerpt, timeToRead }) => (
                <PostPreview
                  key={date}
                  title={title}
                  date={date}
                  slug={slug}
                  excerpt={excerpt}
                  timeToRead={timeToRead}
                />
              ))}
            </div>
          </section>
        )}
      </Container>
    </Layout>
  </>
);

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
