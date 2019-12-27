import React, { Component } from 'react'
import { Layout, Menu,Input, Breadcrumb, Icon,Drawer,Button, Dropdown } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export class Bag extends Component {
    render() {
        return (
            <div>
                <Layout>
                <Header style={{background:"white"}}>
                <img src ='/myntra.png'style={{width:'100px',display:'flex',alignItems:'center'}}/>
                <ol style={{height:"20px",textDecoration:'line',textDecorationColor:'green',color:'green',paddingRight:'40px'}}>Bag</ol>
                </Header>
                </Layout>
            </div>
        )
    }
}

export default Bag
