import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom'
import { Layout, Menu} from 'antd';
import { Input } from 'antd';
import { Card,Row,Col } from 'antd';

import './App.css';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Meta } = Card;
class App extends React.Component { 
  
  render(){
  return (
    <div className="App">
     <Layout className="layout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:'white' }}>
      <Menu
        mode="horizontal" 
        style={{ lineHeight: '64px',color:'black',width:"100%"}}>
        <Menu.Item ><img src ='/myntra.png'style={{height:'20px'}}/></Menu.Item>
        <Menu.Item key="1" >Men</Menu.Item>
        <Menu.Item key="2">Women</Menu.Item>
        <Menu.Item key="3">Kids</Menu.Item>
        <Menu.Item key="4">Home&Living</Menu.Item>
        <Menu.Item key="5">Discover</Menu.Item>   
      <Search
      placeholder="Search for products,brands and more"
      onSearch={value => console.log(value)}
      style={{ width: 350,marginLeft:'100px'}} />
      <Menu.Item ><img src ='/profile.png'style={{height:'20px'}}/>Profile </Menu.Item>
      <Menu.Item><img src ='/wishlist.png'style={{height:'20px'}}/>Wishlist</Menu.Item>
      <Menu.Item><img src ='/bag.png'style={{height:'20px'}}/>Bag </Menu.Item>
      </Menu> 
    </Header>
    <Content>
    <Row>
    <div style={{position:'center',fontSize:'20px',height:'40px',marginTop:'70px',}}>
    <img src="/Rupee.png" style={{height:'20px'}}/>
      PRICE REVEAL STARTS IN</div></Row>
    <Row>
      <div style={{textAlign:'center',height:'90px', fontSize:'30px',padding:'20px',backgroundColor:'White'}}>
        <img src="/tag.png" style={{height:'40px'}}/>
      Price inclusive of all taxes</div></Row>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/19/50668b75-c664-4460-86db-d87c8515aead1576737958567-Desktop-Main--1-.jpG" alt="First slide" style={{width:'20px',height:'400px'}}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="data:image/jpeg;base64,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" 
      alt="Second slide"style={{width:'20px',height:'400px'}}/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/photo.jpg" alt="Third slide" style={{width:'20px',height:'400px'}}/>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
</div>

<div style={{ background: 'white' }}>
    <Row gutter={16}>
      <Col span={8}>
        <Card  bordered={false} 
        cover={<img alt="example" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9hK8P9KNOICIa2-OWHiDULZCgFIoDb-m3Cz9of2_HTwu_tFDZ'
          style={{ width:'70%',marginTop:'20px',marginLeft:'30px'}} />}>
        <Col  span={2}>
          <Row gutter={2}/>
        <Card  bordered={false}
        cover={<img alt="example" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9hK8P9KNOICIa2-OWHiDULZCgFIoDb-m3Cz9of2_HTwu_tFDZ'
          style={{ width:'1850%',marginRight:'120px'}} />}></Card>
        </Col>

        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={false} 
        cover={<img alt="example" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIcLEQpq1EmSepItHf2_Ci-H_MjA6YTabGTY3PLBDuAGIEtUFO'
          style={{ width:'90%',height:'430px',marginTop:'20px',marginRight:'60px'}} />}>
        
        </Card>
      </Col>
      <Col span={8}>
        <Card  bordered={false} cover={<img alt="example" src='data:image/jpeg;base64,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'
          style={{ width:'80%',marginTop:'20px',marginLeft:'70px'}} />}>
        <Col  span={2}>
          <Row gutter={2}/>
        <Card  bordered={false}
        cover={<img alt="example" src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv5fxaOb5WLOM7m1L1jgoY3kZ4LLoxz39m1cW9SkEIVjZV0diC'
          style={{ width:'2100%',marginLeft:'40px'}} />}></Card>
        </Col>
        </Card>
      </Col>
    </Row>
    
  </div>

  
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/18/e4c979a5-3891-423d-b958-776a477beb741576662201711-HDFC_Desktop.jpg" 
    srcset=""/>
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/18/9128a670-91b6-450d-a714-ff745eedced21576662201665-paypal_Desktop.jpg" srcset=""/>
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/18/15afff28-8226-47f3-8e83-199eca0574d41576662201759-GPAY_Desktop.jpg" srcset=""/>
    </div>
    <div class="carousel-item">
    <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/19/b6891c15-f831-4446-a14d-c8fb6eb7f7ce1576771867154-Desktop--1---2-.jpg" srcset=""></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  
    </Content>

     </Layout>
    




 </div>
    
  );
}
}



export default App;
