import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Layout, Menu,Input, Breadcrumb, Icon } from 'antd';
import {Nav,Navbar,NavDropdown,Button,Form,FormControl}from 'react-bootstrap';


const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

class  App extends React.Component {
  render(){
  return (
    <Navbar bg="white" expand="lg">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <img src ='/myntra.png'style={{height:'30px',width:'50px',display:'flex',alignItems:'center'}}/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      <Nav.Link href="#home"style={{marginLeft:'20px'}}>Men</Nav.Link>
      <Nav.Link href="#link"style={{marginLeft:'20px'}}>Women</Nav.Link>
      <Nav.Link href="#link"style={{marginLeft:'20px'}}>Kids</Nav.Link>
      <Nav.Link href="#link"style={{marginLeft:'20px'}}>Home&living</Nav.Link>
      <Nav.Link href="#link"style={{marginLeft:'20px'}}>Discover</Nav.Link> 
    </Nav>
    
      <Search
      placeholder="Search for products,brands and more"
      onSearch={value => console.log(value)}
      style={{ width: 200,marginLeft:'20px'}} />
      <Nav>
      <Nav.Link href="#home"style={{marginLeft:'20px'}}><img src ='/profile.png'style={{height:'20px'}}/>Profile</Nav.Link>
      <Nav.Link href="#home"style={{marginLeft:'20px'}}><img src ='/wishlist.png'style={{height:'20px'}}/>Wishlist</Nav.Link>
      <Nav.Link href="#home"style={{marginLeft:'20px'}}><img src ='/bag.png'style={{height:'20px'}}/>Bag</Nav.Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
}
export default App;
