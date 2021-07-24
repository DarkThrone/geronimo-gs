import ItemSpacer from './ItemSpacer';

import Container from './container';
import Twitter from './Twitter';
import Github from './Github';

const Footer = () => (
  // <footer className="mb-16 mt-20">
  <footer className="mb-8 mt-20">
    <Container>
      <div className="container flex justify-between items-stretch w-full mx-auto bg-white items-center">
        <div className="space-x-3 flex flex-initial items-center">
          &copy; 2021 Geronimo Garcia Sgritta. All rights reserved.
        </div>
        <div className="flex-initial flex items-center space-x-1">
          <a href="/rss.xml" rel="noreferrer" target="_blank">
            rss
          </a>
          <ItemSpacer />
          <Twitter />
          <ItemSpacer />
          <Github />
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
