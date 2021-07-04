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
    <div className="max-w-2xl mx-auto">
      <div className="block md:hidden mb-6">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
        <ReadingTime timeToRead={timeToRead} />
      </div>
    </div>
  </>
);

export default PostHeader;
