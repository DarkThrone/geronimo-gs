import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export type LogoSize = 'sm' | 'lg';

interface LogoProps {
  size?: LogoSize;
}

const isSize = (comp: LogoSize) => (size: LogoSize) => size === comp;

const isSm = isSize('sm');
const isLg = isSize('lg');

const Logo = ({ size = 'lg' }: LogoProps) => {
  const sm = isSm(size);
  const lg = isLg(size);
  const imgSize = lg ? 64 : 48;

  const titleCls = cx(' flex-1 font-bold tracking-tighter leading-tight', {
    'text-3xl': lg,
    'text-xl': sm,
  });

  return (
    <Link href="/" passHref>
      <a href="dummy" className="space-x-3 flex flex-initial items-center">
        <Image
          className="flex-initial"
          src="/assets/blog/icons/dark-throne-icon.svg"
          alt="A Throne of sword"
          height={imgSize}
          width={imgSize}
        />
        <div className={titleCls} data-cy="blog-title">
          The Dark Throne
        </div>
      </a>
    </Link>
  );
};

Logo.defaultProps = {
  size: 'lg',
};

export default Logo;
