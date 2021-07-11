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
  <div key={date} className="mb-16">
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <a href="dummy" className="hover:text-green-600">
        <h2 className="text-xl font-bold leading-tight mb-2">{title}</h2>
        <div className="mb-1 text-gray-500 text-sm">
          <DateFormatter dateString={date} /> -{' '}
          <ReadingTime timeToRead={timeToRead} />
        </div>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">{excerpt}</p>
      </a>
    </Link>
  </div>
);

export default PostPreview;
