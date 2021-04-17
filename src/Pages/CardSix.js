import React from 'react';

import './../style.css';
import Header from '../Header';
import Footer from '../Footer';
import {Col,Row,Card} from 'antd';
import 'antd/dist/antd.css';

const CardSix = () => {

    return<>
    <Header/>
    <div className="content">
  <Row gutter={36} className="card">
  <Col span={8}>
  <Card title="Material Dashboard Pro"  style={{ width: 1450, height:700 }}>
       <p style={{fontSize: 17}}>Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts through an easy to use and beautiful set of components. Material Dashboard PRO React was built over the popular Material-UI framework.
           Material Dashboard PRO React makes use of light, surface and movement. The general layout resembles sheets of paper following multiple different layers, so that the depth and order is obvious. The navigation stays mainly on the left sidebar and the content is on the right.
           Material Dashboard PRO React comes with 7 color filter choices for the links of the Sidebar (blue, green, orange, red, purple, rose, white), 3 filter color choices for background of the Sidebar (white, blue`, black), an option to have a background image on the Sidebar and 6 color filter choices the card headers (blue, green, orange, red, purple, rose).
           Material Dashboard PRO React uses a framework built by our friend Olivier - Material-UI, who did an amazing job creating the backbone for the material effects, animations, ripples and transitions. Big thanks to his team for the effort and forward thinking they put into it.</p>
        <div><h2>Technology Used:</h2></div>
       <p>Card content</p>
       <p>Card content</p>
   </Card>
  </Col>
</Row>          
  </div>
    <Footer/>
</>

}

export default CardSix;