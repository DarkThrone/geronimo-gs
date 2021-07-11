import { BLOG_TITLE } from '../lib/constants';

type Props = {
  title: string;
};

const Title = ({ title: postTitle }: Props) => (
  <title>
    {postTitle} | {BLOG_TITLE}
  </title>
);

export default Title;
