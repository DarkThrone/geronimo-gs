import { useState } from 'react';
import cx from 'classnames';
import Link from 'next/link';
import Logo, { LogoSize } from './logo';
import Twitter from './Twitter';
import MenuIcon from '../public/assets/blog/icons/menu-icon.svg';

const getSize: (shadow: boolean) => LogoSize = (shadow) =>
  shadow ? 'sm' : 'lg';

type NavigationProps = {
  shadow: boolean;
};
const Navigation = ({ shadow }: NavigationProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div
      className={cx('fixed top-0 z-40 w-full bg-white', {
        'shadow-md': shadow,
      })}
    >
      <div className="container flex flex-wrap justify-between px-2 lg:px-0 lg:items-stretch w-full mx-auto bg-white items-center">
        <Logo size={getSize(shadow)} />
        <button
          type="button"
          className={cx(
            'visible lg:hidden rounded border h-10 w-10 border-gray-300',
            { 'bg-white': !open, 'bg-gray-200': open },
          )}
          onClick={toggleMenu}
        >
          <MenuIcon />
        </button>
        <nav className="hidden flex-initial lg:flex items-center space-x-8">
          <Link href="/articles" passHref>
            <a className="flex-initial h-6" href="dummy">
              Articles
            </a>
          </Link>
          <Link href="/uses" passHref>
            <a className="flex-initial h-6" href="dummy">
              Uses
            </a>
          </Link>
          <div className="flex flex-initial h-10 leading-10 items-center">
            <Twitter hollow />
          </div>
        </nav>
        <nav
          className={cx('visible lg:hidden overflow-clip menu', {
            'max-h-0': !open,
          })}
        >
          <div className="container flex flex-col flex-grow">
            <Link href="/articles" passHref>
              <a className="flex-initial h-10 leading-10" href="dummy">
                Articles
              </a>
            </Link>
            <Link href="/uses" passHref>
              <a className="flex-initial h-10 leading-10" href="dummy">
                Uses
              </a>
            </Link>
            <div className="flex flex-initial h-10 leading-10 items-center">
              <Twitter hollow />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
