import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined, PhoneTwoTone} from '@ant-design/icons';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
                    
          <Col lg={5} sm={24} xs={24}>
            <div className="footer-center">
              <h2>ABOUT US</h2>
              <div className="address">              
                <p autoCapitalize='true'>42A, NSC Bose Road, Ullagaram<br/>Chennai - 600 091<br/>India</p>
              </div>
              
              <h2>CONTACT US</h2>
              <div className="contactus">                
              
                <p className="contact"><Button id="phone" className="footer-icons" ghost="true" icon="phone"></Button>+91 893 989 0562</p>             
                <p className="contact"><Button id="mail" className="footer-icons" ghost="true" icon="mail"></Button>Info@crearefoundation.com</p>             
              </div>
            </div>
          </Col>

          <Col lg={5} sm={24} xs={24}>
            <div className="footer-center">
              <h2>EXPLORE</h2>
              <div>
                <a href="#">
                  Home
                </a>
              </div>
              <div>
                <a href="#">
                How Crearé?
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">
                Blogs
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">
                Contact Us
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener"
                  href="TODO"
                >
                  Meeting Room
                </a>
              </div>
            </div>
          </Col>

          <Col lg={5} sm={24} xs={24}>
            <div className="footer-center">
              <h2>LEGAL</h2>
              <div>
                <a href="#">
                  Terms & Conditions
                </a>
              </div>
              <div>
                <a href="#">
                  Privacy Policy
                </a>
              </div>
            
            </div>
          </Col>

          <Col xxl={4} xl={6} lg={8} md={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>CONNECT WITH US</h2>
                <div className="footer-icons">
                <Button className="footer-icons" ghost="true" size="small">
                    <FacebookOutlined/>
                </Button>
                
                <a href="https://www.instagram.com/crearefoundation/" rel="noopener noreferrer" target="_blank">
                <Button className="footer-icons" ghost="true" size="small">
                    <InstagramOutlined />
                </Button>
                </a>

                <Button className="footer-icons" ghost="true" size="small">
                  <LinkedinOutlined />
                </Button>
              
                <Button className="footer-icons" ghost="true" size="small">
                <TwitterOutlined />
                </Button>
                
                <Button className="footer-icons" ghost="true" size="small">
                  <YoutubeOutlined />
                </Button>
              </div>
              
            </div>
          </Col>


        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Button ghost size="small" >
              English
            </Button>
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="TODO"
              rel="noopener noreferrer"
              target="_blank"
            >
              Terms & Conditions
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="TODO"
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Designed By Vivek Kumar Singh</span>
          <span style={{ marginRight: 12 }}>© 2020 Crearé Foundation</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
