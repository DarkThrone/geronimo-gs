import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';

const Footer = () => (
  <footer className="bg-accent-1 border-t border-accent-2">
    <Container>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="mx-3 font-bold hover:underline"
          >
            github
          </a>
          <a href="/rss.xml">rss</a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
