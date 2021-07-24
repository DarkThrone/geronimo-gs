import { ReactNode } from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';
import Navigation from './navigation';
import useIntersectionObserver from '../lib/hooks/useIntersectionObserver';

type Props = {
  preview?: boolean;
  children: ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const { Notifier, isVisible } = useIntersectionObserver();

  return (
    <>
      <Meta />
      <Notifier />
      <Navigation shadow={!isVisible} />
      <div className="min-h-screen pt-32">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  preview: false,
};

export default Layout;
