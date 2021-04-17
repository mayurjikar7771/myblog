import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div className="sticky">
            <Row className="header">
                
                <Col span={22} className="header-links">
                    <Link to="/"><b>Dashboard</b></Link>
                    <Link to="/profile"><b>Profile</b></Link>
                    <Link to="/about_us"><b>About Us</b></Link>
                    <Link to="/contact_us"><b>Contact Us</b></Link>
                    </Col>
            </Row>
        </div>
    );
} 

export default Header;