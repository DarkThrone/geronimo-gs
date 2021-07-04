import Link from 'next/link';
import DateFormatter from './date-formatter';
import ReadingTime from './reading-time';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  timeToRead: number;
};

const PostPreview = ({ title, timeToRead, date, excerpt, slug }: Props) => (
  <div className="col-start-2 col-span-4">
    <h3 className="text-3xl mb-3 leading-snug">
      <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
        <a href="dummy" className="hover:underline">
          {title}
        </a>
      </Link>
    </h3>
    <div className="text-lg mb-8">
      <DateFormatter dateString={date} /> -{' '}
      <ReadingTime timeToRead={timeToRead} />
    </div>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
  </div>
);

export default PostPreview;
