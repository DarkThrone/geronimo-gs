import { BLOG_SUBTITLE } from '../lib/constants';

const iconStyle = {
  width: 100,
  height: 100,
};

const Intro = () => (
  <section className="flex-col flex items-center text-center">
    <img
      src="/assets/blog/icons/dark-throne-icon.svg"
      alt=""
      style={iconStyle}
    />
    <h1
      className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight"
      data-cy="blog-title"
    >
      The
      <br />
      Dark Throne
    </h1>
    <h4 className="text-center md:text-left text-lg mt-5">{BLOG_SUBTITLE}</h4>
  </section>
);

export default Intro;
