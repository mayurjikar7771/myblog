import React from 'react';
import { Row, Col } from 'antd';

const Footer = () =>{

    return(
        <div className="sticky">
            <Row className="Footer">
                <Col span={22}>
                <p style={{fontSize: 20}}>Copyright © 2021  All Rights Reserved.</p>
                </Col>
            </Row>
      </div>
    );
    
  
}

export default Footer;