import React, { Component } from 'react';
import Headers from './Headers';
import { Layout,Card,Button,Row,Col,Radio} from 'antd';

const{Content,Footer}=Layout;
export class SignUp extends Component {
    render() {
        return (
            <div>
                <Headers/>
                <Content>
            <div style={{backgroundColor: "#FEEDF6",padding:"20px"}}>
       <Card  style={{ width: 400 ,marginLeft:'500px'}}>
           <div>
     <p style={{ textAlign:'center',fontSize:'32px',color:"#535766"}}> Sign Up with Myntra</p>
     </div>
     <div>
         <p style={{textAlign:'center',color: "#94969"}}>Easily Using</p>
     </div>
     <div style={{textAlign:'center'}}>
     <Button style={{fontSize:'14px',color:"#535766",fontWeight: "500",marginRight:'50px' }}>
         <img src="/facebook.png"style={{height:'20px',marginRight:'20px'}}/>FACEBOOK</Button> 
     <Button style={{fontSize:'15px',color:"#535766",fontWeight: "500"}}>
     <img src="/google.png"style={{height:'20px',marginRight:'20px'}}/>GOOGLE</Button> 
     </div>
     <div>
     <p style={{textAlign:'center',color: "#94969",marginTop:'20px'}}>-Or Using Email-</p>
     </div>
     <div>
         <Card >
        <input  type="text" class="no-outline" placeholder="Your Email" style={{borderTopStyle:'hidden',
         borderBottomStyle:'hidden',
         borderRightStyle:'hidden',
         borderLeftStyle:'hidden',backgroundColor:'white'}}/>
             

        <hr></hr>
             <input  type="text" class="no-outline" placeholder="Enter Something" style={{borderTopStyle:'hidden',
         borderBottomStyle:'hidden',
         borderRightStyle:'hidden',
         borderLeftStyle:'hidden',backgroundColor:'white'}} />
        <div >
        <Row type="flex" justify="space-between"style={{paddingTop:"20px"}}>
      <Col span={6}style={{fontSize:'10px',backgroundColor:'#eee',padding:"2px"}} >8 Characters</Col><br></br>
      <Col span={5}style={{fontSize:'10px',backgroundColor:'#eee',padding:"2px"}} >1 special</Col>
      <Col span={5}style={{fontSize:'10px',backgroundColor:'#eee',padding:"2px"}} >1 Uppercase</Col>
      <Col span={5}style={{fontSize:'10px',backgroundColor:'#eee',padding:"2px"}} >1 Lowercase</Col>
    </Row>
        </div>
             <hr></hr>
             <div>Mobile Number (For Order Status Updates)</div>
             <hr></hr>
             <div > 
             <Radio.Group name="radiogroup"style={{color:"Grey"}} >
             <Radio  value={1}>Male</Radio>
             <Radio value={2}>Female</Radio>
      
    </Radio.Group>
             </div>
             
         </Card>
         <div style={{paddingTop:"20px",}}>
    <Button  block style={{backgroundColor:"#FF527B"}}> Register
    </Button></div>
     </div>
     <div style={{textAlign:"center",padding:"20px",fontSize:"10px"}}>Already have an account?
     <p style={{color:"pink",fontSize:"15px"}}>Login!</p>
     </div>
    </Card>   
            </div>
            </Content>
            </div>
        )
    }
}

export default SignUp
