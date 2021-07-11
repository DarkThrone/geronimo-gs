import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => (
  <h1 className="text-5xl font-bold tracking-tighter leading-none mb-3 text-center">
    {children}
  </h1>
);

PostTitle.defaultProps = {
  children: null,
};

export default PostTitle;
