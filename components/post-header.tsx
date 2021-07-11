import DateFormatter from './date-formatter';
import PostTitle from './post-title';
import Avatar from './avatar';
import Author from '../types/author';
import ReadingTime from './reading-time';

type Props = {
  title: string;
  date: string;
  timeToRead: number;
  author: Author;
};

const PostHeader = ({ title, date, author, timeToRead }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-14 text-lg">
        <DateFormatter dateString={date} /> -{' '}
        <ReadingTime timeToRead={timeToRead} />
      </div>
    </div>
  </>
);

export default PostHeader;
