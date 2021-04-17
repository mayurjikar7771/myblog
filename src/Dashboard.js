import React from 'react';
import Layout from './Layout';  
import { Card,Col,Row,Avatar,Button } from 'antd';
//import Details from './Details';
//import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
const { Meta } = Card;

class Dashboard extends React.Component{
//     constructor(){
//         super();

       

// }
 CardFirst = (props) => {

    this.props.history.push("/first-blog");    
   

 }
 CardSecond = (props) => {

    this.props.history.push("/second-blog");
 }
 CardThird = (props) => {
     this.props.history.push("/third-blog");
 }
 CardFourth = (props) => {
     this.props.history.push("/fourth-blog");
 }
 CardFifth = (props) => {
     this.props.history.push("/fifth-blog");
 }
 CardSix = (props) => {
     this.props.history.push("/six-blog");
 }

 render(){
    return <Layout>
        <Row gutter={24} className="card">
           <Col span={8}>
                <Card className="cards"
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://thumbs.dreamstime.com/b/hand-marker-writing-crm-businessman-drawing-blurred-city-background-67512743.jpg"
                    />
                    }
                    actions={[
                        <Button type="primary" onClick={this.CardFirst} ghost>
                          <b>See Details</b>
                        </Button>
                    ]}
                    >
                    <Meta
                    avatar={<Avatar src="https://madewithreact.com/assets/img/icon-react.png" />}
                    title="Material Dashboard Pro"
                    description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                   
                    />
                </Card>
           </Col>
           <Col span={8}>
                <Card className="cards"
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/jobs-660_031819053533.jpg"
                    />
                    }
                    actions={[
                        <Button type="primary" onClick={this.CardSecond}  ghost>
                          <b>See Details</b>
                        </Button>
                    ]}
                    >
                    <Meta
                    avatar={<Avatar src="https://madewithreact.com/assets/img/icon-react.png" />}
                    title="Light Bootstrap Dashboard Pro"
                    description="Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive."
                    />
                </Card>
           </Col>
           <Col span={8}>
                <Card className="cards"
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://salestack.in/admin/api/uploads/Product/1604560775PxNWSu7z.png"
                    />
                    }
                    actions={[
                        <Button type="primary" onClick={this.CardThird}  ghost>
                          <b>See Details</b>
                        </Button>
                    ]}
                    >
                    <Meta
                    avatar={<Avatar src="https://madewithreact.com/assets/img/icon-react.png" />}
                    title="Volt Pro React Dashboard"
                    description="Volt Pro React Dashboard is a premium admin dashboard template built on top of the most popular front-end library in the world called React.js and the UI elements are based on the latest version of Bootstrap 5. It features over 800 React components, customized plugins."
                    />
                </Card>
           </Col>
        </Row>
        <Row gutter={24} className="card">
           <Col span={8}>
                <Card className="cards"
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://businessinfo.online/files/1504788346-Sahaj%20International%20Logo.jpg"
                    />
                    }
                    actions={[
                        <Button type="primary" onClick={this.CardFourth} ghost>
                          <b>See Details</b>
                        </Button>
                    ]}
                    >
                    <Meta
                    avatar={<Avatar src="https://madewithreact.com/assets/img/icon-react.png" />}
                    title="Material Dashboard Pro"
                    description="Material Dashboard PRO React is a Premium Material-UI@4.1.0 Admin with a fresh, new design inspired by Google's Material Design. We are very excited to introduce our take on the material concepts."
                   
                    />
                </Card>
           </Col>
           <Col span={8}>
                <Card className="cards"
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://s3.amazonaws.com/creativetim_bucket/products/66/original/opt_lbp_react_thumbnail.jpg"
                    />
                    }
                    actions={[
                        <Button type="primary" onClick={this.CardFifth} ghost>
                          <b>See Details</b>
                        </Button>
                    ]}
                    >
                    <Meta
                    avatar={<Avatar src="https://madewithreact.com/assets/img/icon-react.png" />}
                    title="Light Bootstrap Dashboard Pro"
                    description="Light Bootstrap Dashboard PRO React is a premium admin dashboard template designed to be beautiful and simple. It is built on top of React Bootstrap, using Light Bootstrap Dashboard PRO and it is fully responsive."
                    />
                </Card>
           </Col>
           <Col span={8}>
                <Card className="cards"
                    style={{ width: 350 }}
                    cover={
                    <img
                        alt="example"
                        src="https://madewithreact.com/content/images/2021/01/volt-react.png"
                    />
                    }
                    actions={[
                        <Button type="primary" onClick={this.CardSix} ghost>
                          <b>See Details</b>
                        </Button>
                    ]}
                    >
                    <Meta
                    avatar={<Avatar src="https://madewithreact.com/assets/img/icon-react.png" />}
                    title="Volt Pro React Dashboard"
                    description="Volt Pro React Dashboard is a premium admin dashboard template built on top of the most popular front-end library in the world called React.js and the UI elements are based on the latest version of Bootstrap 5. It features over 800 React components, customized plugins."
                    />
                </Card>
           </Col>
        </Row>          
    </Layout>

}
}

export default Dashboard;