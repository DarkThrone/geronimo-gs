const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

const BLOG_URL = 'https://geronimo.gs';
const BLOG_TITLE = 'The DarkThrone';
const BLOG_SUBTITLE = 'Random ramblings and rants, with a tiny bit of sense.';

async function generate() {
  const feed = new RSS({
    title: BLOG_TITLE,
    site_url: BLOG_URL,
    description: BLOG_SUBTITLE,
    language: 'en_US',
    feed_url: `${BLOG_URL}/feed.xml`,
  });

  const posts = await fs.readdir(path.join(__dirname, '..', '_posts'));

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith('index.')) return;

      const content = await fs.readFile(
        path.join(__dirname, '..', '_posts', name),
      );

      const frontMatter = matter(content);

      feed.item({
        title: frontMatter.data.title,
        url: `${BLOG_URL}/posts/${name.replace(/\.mdx?/, '')}`,
        date: new Date(frontMatter.data.date).toUTCString(),
        description: frontMatter.data.excerpt,
        // categories: frontMatter.data.tag.split(', '),
        author: frontMatter.data.author.name,
      });
    }),
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
