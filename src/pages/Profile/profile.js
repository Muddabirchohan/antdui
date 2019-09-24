import React,{Component} from 'react';
import { Card,Row,Col,List,Typography,Avatar,Button,Tabs,Anchor,Descriptions } from 'antd';
import styles from './profile.less';
const { TabPane } = Tabs;
const { Link } = Anchor;



export default class Profile extends Component {

constructor(){
  super();
  this.state ={
 
      activeTab: "1"
  
  }
}

changeTab = activeKey => {
  console.log(activeKey);
  this.setState({
    activeTab: activeKey
  })
}
    render(){
        return(
            <div> 
     
     <Row>
      <Col lg={5}>
      <div className={styles['profile-side']}> 
      <Avatar size="small" icon="user" />

      <List>
        <List.Item>
        <Anchor>
    <Link title="page 1" /> 
    <Link href="#tab1" title="page 1" /> 
    <Link href="#components-anchor-demo-basic" title="page 1" /> 

        </Anchor>
   </List.Item>
        </List>
      </div>
      </Col>


      <Col lg={7}>
      <div className={styles['profile-mid']}> 
      <Avatar  size={150} icon="user" />
        <p> datasad is a platform for services such as ias pass and saass</p>
        <div>
        <Button>Default</Button>
        <Button type="dashed" >Dashed</Button>

            </div>
      </div>
      </Col>


      <Col lg={12}>
      
      <div className={styles['profile-end']}> 
      <Tabs type="card" activeKey={this.state.activeTab} onChange={this.changeTab}>
    <TabPane tab="Tab 1" key="1" id="tab1">
<div> 
<Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>,
</div>
    </TabPane>
    <TabPane tab="Tab 2" key="2">
    <Descriptions title="Pricing" >
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
        </Descriptions>    </TabPane>

  </Tabs>,
      </div></Col>
    
    </Row>
                
            </div>
        )
    }
}   