import fs from 'fs';
import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { BLOG_TITLE } from '../lib/constants';
import { BlogPost } from '../types/post';
import PostPreview from '../components/post-preview';
import { generateRss } from '../lib/rss';

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
            <div className="grid grid-cols-6 gap-y-20 md:gap-y-32 mb-16">
              {allPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  date={post.date}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  timeToRead={post.timeToRead}
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
  const rss = await generateRss(allPosts);

  fs.writeFileSync('./public/rss.xml', rss);

  return {
    props: { allPosts },
  };
};
