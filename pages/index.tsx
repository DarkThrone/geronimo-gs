import fs from 'fs';
import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import { BLOG_TITLE } from '../lib/constants';
import { generateRss } from '../lib/rss';
import AtlassianSvg from '../public/assets/blog/icons/atlassian.svg';

const Index = () => (
  <>
    <Layout>
      <Head>
        <title>
          {BLOG_TITLE}
          &apos;s Blog
        </title>
      </Head>
      <Container>
        <article className="mb-32">
          <div className="max-w-2xl mx-auto">
            <div className="markdown text-center">
              <h1>Hi there 👋🏻</h1>
              <p>I&#39;m Ger&oacute;nimo, also known as DarkThrone.</p>
              <p>
                I&#39;m a software engineer that likes computer graphics, music
                and video games. I&#39;ve spent most of my professional years
                working with the web and all that stuff like APIs and such.
                Lately I&#39;ve been doing quite a lot of React and Rust.
              </p>
              <p>
                During the day I work as a software engineer at{' '}
                <AtlassianSvg className="inline" style={{ height: 16 }} /> in
                the Growth team, where we try to connect our users with the
                right tools to empower them.
              </p>
              <p>
                On my free time I usually code for fun, work on some side
                project, play and record some music or simply play some games!
              </p>
              <p>
                I use this platform to share my thoughts and the side projects
                I&#39;m working on. Currently I&#39;m preparing a course about
                Rust! Sign up to the newsletter if you want me to keep you
                posted.
              </p>
              <p>DarkThrone&#39;s the name. Code is the game. Glad you came.</p>
            </div>
          </div>
        </article>
      </Container>
    </Layout>
  </>
);

export default Index;

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts();
//   const rss = await generateRss(allPosts);
//
//   fs.writeFileSync('./public/rss.xml', rss);
//
//
// };
