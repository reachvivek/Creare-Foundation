import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>Let’s <span>Crearé</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              Here's the boxed page-content
            </p>
            <div key="code1" className="home-code">
            </div>
            <Button type="primary">Launch Event</Button>             
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
