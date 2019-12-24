import React from 'react';
import { Layout, Menu,Input, Breadcrumb, Icon,Drawer,Button } from 'antd';
import {Nav,Navbar,Container,Row,Col,NavDropdown,Form,FormControl}from 'react-bootstrap';

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
class  App extends React.Component {
    state = { webview:true,
        visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount= async()=>{
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    console.log(isMobile,"mobilee")
    if(isMobile){
    await this.setState({webview:false})
    }
    else{
    await this.setState({webview:true})
    }
    }
    render(){
        console.log('web view',this.state.webview)
    return (
        <div>

{this.state.webview?
      //Webview here
       <div className="webview">
           <Navbar bg="white" fixed='top'expand="lg">
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <img src ='/myntra.png'style={{height:'30px',width:'50px',display:'flex',alignItems:'center'}}/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      
        <Nav.Link href="#home"style={{marginLeft:'20px',fontSize:'16px',fontWeight: 600}}>Men</Nav.Link>
        <Nav.Link href="#link"style={{marginLeft:'20px',fontSize:'16px',fontWeight: 600}}>Women</Nav.Link>
        <Nav.Link href="#link"style={{marginLeft:'20px',fontSize:'16px',fontWeight: 600}}>Kids</Nav.Link>
        <Nav.Link href="#link"style={{marginLeft:'20px',fontSize:'16px',fontWeight: 600}}>Home&living</Nav.Link>
        <Nav.Link href="#link"style={{marginLeft:'20px',fontSize:'16px',fontWeight: 600}}>Discover</Nav.Link> 
      </Nav>
      
      
        <Search
        placeholder="Search for products,brands and more"
        onSearch={value => console.log(value)}
        style={{ width: '350px'}} />
        <Nav>
        <Container>
  <Row>
    <Col><img src ='/profile.png'style={{height:'22px',marginLeft:'20px'}}/>
    <Nav.Link href="#home"style={{fontSize:'16px',fontWeight: 500}}>
            Profile</Nav.Link></Col>
    <Col ><img src ='/wishlist.png'style={{height:'22px',marginLeft:'20px'}}/>
    <Nav.Link href="#home"style={{fontSize:'16px',fontWeight: 500}}>
            Wishlist</Nav.Link></Col>
    <Col><img src ='/bag.png'style={{height:'26px',marginLeft:'10px'}}/>
    <Nav.Link href="#home"style={{fontSize:'16px',fontWeight: 500}}>
            Bag</Nav.Link></Col>
  </Row>
  
</Container>
        
        
        
       
        </Nav>
    </Navbar.Collapse>
  </Navbar>
       </div>
      :
      //mobileview here
       <div className='mobview'>
          <Navbar bg="white"  expand="lg">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
   
       
  <Icon type="menu"  onClick={this.showDrawer}/>
  <div class="nav-icon header-title" style={{top:"19px",fontWeight:600}}>Myntra</div>
  
  <Icon type="search"style={{fontSize:'20px',marginLeft:"20px"}} />
  <img src ='/profile.png'style={{height:'20px'}}/>
  <img src ='/wishlist.png'style={{height:'20px'}}/>
  <img src ='/bag.png'style={{height:'25px'}}/>
  <Drawer
        //   title="Basic Drawer"
          placement="left"
          maxWidth="100%"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
  
  
    <img src="//assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2019/8/22/7bcfd44a-6b96-485a-bb5a-0cb3548e90c31566480703833-group-5-2x.png"
      class="img-responsive preLoad loaded" alt="" title="" style={{maxWidth:'100%'}}/>
     
      <p style={{fontSize:'16px',fontWeight: 500,padding:"12px 14px"}}> Men</p>
      <p style={{fontSize:'16px',fontWeight: 500,padding:"12px 14px"}}> Women</p>
      <p style={{fontSize:'16px',fontWeight: 500,padding:"12px 14px"}}> Kids</p>
      <p style={{fontSize:'16px',fontWeight: 500,padding:"12px 14px"}}>Home&living</p>
      <p style={{fontSize:'16px',fontWeight: 500,padding:"12px 14px"}}>Discover </p>
     <hr></hr>
     <p style={{fontSize:'16px',padding:"12px 14px"}}>Myntra Inside   </p>
     <p style={{fontSize:'16px',padding:"12px 14px"}}>Gift Cards</p>
     <p style={{fontSize:'16px',padding:"12px 14px"}}>Contact</p>
     <p style={{fontSize:'16px',padding:"12px 14px"}}> FAQ</p>
     <div style={{backgroundImage: "linear-gradient(109deg,#fff,#ffe4da)",width:"100%"}}>
     <img src="https://assets.myntassets.com/assets/images/retaillabs/2019/1/12/987c00c1-132c-4c16-8c68-52e9d88e41621547273111472-group-3x.png"
      width="48" height="72"/>
      {/* <p class="card-heading">Enjoy app-like experience</p> */}
      <div style={{marginLeft:"50px"}}>
     <a class="logoutButton" href="/login" style={{fontSize:'14px',padding:"12px 14px",color: "#ff3f6c",
    fontWeight: "500"}}>Log In</a>
      <a class="logoutButton" href="/login" style={{fontSize:'14px',padding:"12px 14px",color: "#ff3f6c",
    fontWeight: "500"}}>Sign Up</a>
      </div>
     </div >
  </Drawer>
</Navbar>
        </div>
     }
      
  </div>
    );
  }
  }
  export default App;
  