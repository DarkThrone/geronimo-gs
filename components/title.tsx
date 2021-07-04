import { BLOG_TITLE } from '../lib/constants';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => (
  <title>
    {title} | {BLOG_TITLE}
  </title>
);

export default Title;
