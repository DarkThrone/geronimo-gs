import cx from 'classnames';
import Link from 'next/link';
import Logo, { LogoSize } from './logo';
import Twitter from './Twitter';

const getSize: (shadow: boolean) => LogoSize = (shadow) =>
  shadow ? 'sm' : 'lg';

type NavigationProps = {
  shadow: boolean;
};
const Navigation = ({ shadow }: NavigationProps) => (
  <div
    className={cx('fixed top-0 z-40 w-full bg-white', {
      'shadow-md': shadow,
    })}
  >
    <div className="container flex justify-between items-stretch w-full mx-auto bg-white items-center">
      <Logo size={getSize(shadow)} />
      <nav className="flex-initial flex items-center space-x-4">
        <Link href="/" passHref>
          <a className="flex-initial h-6" href="dummy">
            Home
          </a>
        </Link>
        <Link href="/articles" passHref>
          <a className="flex-initial h-6" href="dummy">
            Articles
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className="flex-initial h-6" href="dummy">
            Contact
          </a>
        </Link>
        <Link href="/uses" passHref>
          <a className="flex-initial h-6" href="dummy">
            Uses
          </a>
        </Link>
        <Twitter hollow />
      </nav>
    </div>
  </div>
);

export default Navigation;
