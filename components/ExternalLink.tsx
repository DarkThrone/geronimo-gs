import { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
};

const ExternalLink = ({ href, children }: Props) => (
  <a className="external" target="_blank" rel="noreferrer" href={href}>
    {children}
  </a>
);

export default ExternalLink;
