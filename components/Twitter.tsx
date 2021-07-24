import Link from 'next/link';
import TwitterHollowSvg from '../public/assets/blog/icons/twitter-hollow.svg';
import TwitterSvg from '../public/assets/blog/icons/twitter.svg';

type Props = {
  hollow?: boolean;
};

const Twitter = ({ hollow = false }: Props) => (
  <Link href="https://twitter.com/geronimogarcia" passHref>
    <a
      className="flex-initial h-6 text-gray-700 hover:text-blue-400 transition-colors"
      style={{
        height: 24,
        width: 24,
      }}
      href="dummy"
      rel="noreferrer"
      target="_blank"
    >
      {hollow ? (
        <TwitterHollowSvg className="fill-current" atl="The twitter bird" />
      ) : (
        <TwitterSvg className="fill-current" atl="The twitter bird" />
      )}
    </a>
  </Link>
);
Twitter.defaultProps = {
  hollow: false,
};

export default Twitter;
