import { BLOG_TITLE } from '@/lib/constants';
import Head from 'next/head';
import ExternalLink from '@/components/ExternalLink';
import Container from '../components/container';
import Layout from '../components/layout';

const Uses = () => (
  <>
    <Layout>
      <Head>
        <title>{BLOG_TITLE} - Uses</title>
      </Head>
      <Container>
        <article className="mb-32">
          <div className="max-w-2xl mx-auto">
            <div className="markdown">
              <h1>The DarkThrone uses</h1>

              <h2>Desktop</h2>
              <p>
                When I&#39;m working in my office either coding or recording I
                have a pretty simple setup:
              </p>
              <ul>
                <li>
                  <ExternalLink href="https://secretlabchairs.com.au/collections/titan-series#titan_2020-batman">
                    SecretLabs Titan series 2020 Batman Edition
                  </ExternalLink>{' '}
                  chair
                </li>
                <li>
                  Ikea{' '}
                  <ExternalLink href="https://www.ikea.com/au/en/p/skarsta-desk-sit-stand-white-s69324813/.">
                    Skarsta Standing Desk
                  </ExternalLink>{' '}
                  160cmx80cm
                </li>
                <li>
                  Dual monitor setup with 2{' '}
                  <ExternalLink href="https://www.dell.com/en-au/shop/ultrasharp-27-4k-usb-c-monitor-u2720q/apd/210-auzu/monitors-monitor-accessories ">
                    Dell U2720Q
                  </ExternalLink>{' '}
                  and a{' '}
                  <ExternalLink href="https://www.dell.com/en-au/shop/dell-dual-monitor-arm-mda20/apd/482-bbdl/monitors-monitor-accessories.">
                    Dell MDA20
                  </ExternalLink>{' '}
                  Dual Arm
                </li>
                <li>
                  <ExternalLink href="https://ergodox-ez.com/">
                    EZ Ergodox Glow
                  </ExternalLink>{' '}
                  with{' '}
                  <ExternalLink href="https://normanlayout.info/">
                    Norman layout
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.caldigit.com/ts3-plus/">
                    CalDigit Ts3 Plus
                  </ExternalLink>{' '}
                  thunderbolt dock
                </li>
              </ul>

              <h2>Development</h2>
              <p>
                For most of my coding needs I have a very straightforward setup
              </p>
              <h4>MacBook Pro 16 (2019)</h4>
              <ul>
                <li>Intel i9 2.3Ghz 8-core</li>
                <li>64Gb ram</li>
                <li>1Tb SSD</li>
                <li>Radeon 5500M 8G GDDR5</li>
              </ul>
              <h4>Desktop setup</h4>
              <ul>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/amd-ryzen-9-3900x-12-core-socket-am4-38ghz-cpu-processor-wraith-prism-cooler-ac24747">
                    AMD Ryzen 9 3900X 12 Core
                  </ExternalLink>{' '}
                  cpu
                </li>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/asus-rog-strix-x570i-gaming-am4-miniitx-motherboard-ac24583">
                    ASUS ROG Strix X570-I
                  </ExternalLink>{' '}
                  motherboard
                </li>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/corsair-vengeance-lpx-64gb-2x-32gb-ddr4-3200mhz-memory-black-ac33992">
                    Corsair Vengeance LPX 64GB (2x32Gb)
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/gigabyte-geforce-rtx-2070-super-windforce-oc-3x-8gb-video-card-ac28534">
                    Gigabyte GeForce RTX 2070 SUPER WINDFORCE OC 3X 8GB
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/seagate-barracuda-510-1tb-nvme-m2-2280s2-ssd-zp1000cm3a001-ac31692">
                    Seagate BarraCuda 510 1TB NVMe M.2 2280-S2 SSD
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/silverstone-sfxl-sx800lti-800w-80-titanium-fully-modular-power-supply-ac21721">
                    SilverStone SFX-L SX800-LTI 800W 80+ Titanium
                  </ExternalLink>{' '}
                  power source
                </li>
                <li>
                  <ExternalLink href="https://thor-zone.com/mini-itx/">
                    Thor-Zone Mjolnir
                  </ExternalLink>{' '}
                  case
                </li>
                <li>
                  <ExternalLink href="https://www.mwave.com.au/product/noctua-nfa12x25-pwm-120mm-4pin-fan-ac17691">
                    Noctua NF-A12x25 PWM 120mm
                  </ExternalLink>{' '}
                  fan
                </li>
              </ul>

              <p>For development in general I mainly use Jetbrains tools</p>
              <ul>
                <li>
                  <ExternalLink href="https://www.jetbrains.com/webstorm/">
                    Webstorm
                  </ExternalLink>{' '}
                  for most web and node stuff
                </li>
                <li>
                  <ExternalLink href="https://www.jetbrains.com/clion/">
                    CLion
                  </ExternalLink>{' '}
                  with{' '}
                  <ExternalLink href="https://plugins.jetbrains.com/plugin/8182-rust">
                    Rust plugin
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.jetbrains.com/rider/">
                    Rider
                  </ExternalLink>{' '}
                  for UE4 stuff
                </li>
              </ul>
              <p>
                For small fixes or misc stuff I always go back to Emacs using
                the Spacemacs configuration. Pretty bare, not much
                customization.
              </p>

              <h2>Streaming</h2>
              <p>For streaming I have a more complex setup than usual</p>
              <ul>
                <li>
                  <ExternalLink href="https://www.bluemic.com/en-us/products/yeti-pro/ ">
                    Blue Yeti Pro
                  </ExternalLink>{' '}
                  microphone
                </li>
                <li>
                  <ExternalLink href="https://www.jbhifi.com.au/products/blue-compass-desk-boom-black">
                    Blue Compass
                  </ExternalLink>{' '}
                  boom arm
                </li>
                <li>
                  <ExternalLink href="https://www.amazon.com.au/Blue-Radius-Custom-Shockmount-Microphones/dp/B078MGXLVS">
                    Blue Shock Mount
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://www.storedj.com.au/dbx-286s-microphone-pre-amp-and-channel-strip-processor">
                    DBX 286S
                  </ExternalLink>{' '}
                  mic preamp
                </li>
                <li>
                  <ExternalLink href="https://focusrite.com/en/usb-c-audio-interface/clarett-usb/clarett-8pre-usb">
                    Focusrite Clarett 8Pre USB
                  </ExternalLink>{' '}
                  audio interface
                </li>
                <li>
                  <ExternalLink href="https://streamlabs.com/">
                    OBS Streamlabs
                  </ExternalLink>
                </li>
                <li>
                  For audio monitoring{' '}
                  <ExternalLink href="https://amzn.com/B000AJIF4E/">
                    Sony MDR-7506
                  </ExternalLink>
                </li>
              </ul>

              <h2>Recording</h2>
              <p>
                Finally when I&#39;m relaxing or in a creative mood, I usually
                play some guitar, piano or bass in my office that becomes a
                recording studio.
              </p>

              <ul>
                <li>Same Clarett as audio interface</li>
                <li>
                  <ExternalLink href="https://www.fractalaudio.com/iii/ ">
                    AxeFX III
                  </ExternalLink>{' '}
                  guitar amp modeler
                </li>
                <li>
                  <ExternalLink href="https://www.darkglass.com/alpha·omega-900-centurion/">
                    DarkGlass Alpha Omega 900 Centurion edition
                  </ExternalLink>{' '}
                  bass preamp
                </li>
                <li>
                  I have several guitars, but the one of choice is a{' '}
                  <ExternalLink href="https://strandbergguitars.com/boden-prog-series/">
                    Strandberg Boden Prog 6 black
                  </ExternalLink>
                </li>
              </ul>

              <h3>Misc stuff</h3>
              <p>
                Every once in a while I might go out and take some photos or
                record my adventures for that purpose I have a few things
              </p>
              <ul>
                <li>
                  <ExternalLink href="https://amzn.com/B004U4UHTQ">
                    Nikon D5100
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://amzn.com/B000ZMCILW">
                    Nikon 18-55mm f/3.5-5.6G AF-S DX VR Nikkor Zoom Lens
                  </ExternalLink>{' '}
                </li>
                <li>
                  <ExternalLink href="Nikon AF-S DX NIKKOR 35mm f/1.8G">
                    Nikon AF-S DX NIKKOR 35mm f/1.8G
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://amzn.com/B08DK5ZH44">
                    GoPro HERO9 Black
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink href="https://amzn.com/B08CMVGVQY">
                    DJI OM 4
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </Container>
    </Layout>
  </>
);

export default Uses;
