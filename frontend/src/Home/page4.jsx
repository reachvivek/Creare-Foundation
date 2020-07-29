import 'react-html5video/dist/styles.css';
import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { DefaultPlayer as Video } from 'react-html5video';
import { page3 } from './data';

const { Element } = BannerAnim;
const { BgElement } = Element;

class Page4 extends React.PureComponent {
  render() {
    const { isMobile } = this.props;
    const children = page3.children.map((item, i) => (
      <Element key={i.toString()}>
        <BgElement className="banner" key="bg">
          <Video
            loop
            muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            key="video"
          >
            <source src="https://www.youtube.com/watch?v=kXYiU_JCYtU&list=RDEMww6ZEHgLhQ-8eu_x7Z-FJw&start_radio=1" />
          </Video>
        </BgElement>
      </Element>

    ));
    const childrenToRender = (
      <TweenOne key="banner-wrapper" animation={{ type: 'from', y: 30, opacity: 0 }}>
        <BannerAnim type="across" thumb={false} duration={550} ease="easeInOutQuint">
          {children}
        </BannerAnim>
      </TweenOne>
    );
    return (
      <div className="homepage">
        <div className="page">
          <h1>{page3.title}</h1>
          <i />
          {
            React.createElement(
              isMobile ? 'div' : OverPack,
              { className: 'banner-wrapper' },
              childrenToRender,
            )}
        </div>
      </div>
    );
  }
}

export default Page4;