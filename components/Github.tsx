import Link from 'next/link';
import GithubSvg from '../public/assets/blog/icons/github.svg';

const Twitter = () => (
  <Link href="https://github.com/darkthrone" passHref>
    <a
      className="flex-initial h-6 text-gray-700 hover:text-gray-700 transition-colors"
      style={{
        height: 24,
        width: 24,
      }}
      href="dummy"
    >
      <GithubSvg className="fill-current" atl="Github octocat" />
    </a>
  </Link>
);
export default Twitter;
