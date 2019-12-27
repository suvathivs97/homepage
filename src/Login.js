import React, { Component } from 'react';
import Headers from './Headers';
import { Layout,Card,Button} from 'antd';

const{Content,Footer}=Layout;
export class Login extends Component {
    render() {
        return (
            <div>
               <Headers/>
                <Content>
            <div style={{backgroundColor: "#FEEDF6",padding:"20px"}}>
       <Card  style={{ width: 400 ,marginLeft:'500px'}}>
           <div>
     <p style={{ textAlign:'center',fontSize:'32px',color:"#535766"}}> Login to Myntra</p>
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
             
         </Card>
         <div style={{paddingTop:"20px",}}>
    <Button  block style={{backgroundColor:"#FF527B"}}> Log In
    </Button></div>
     </div>
     <div style={{padding:"20px",color:"pink",fontSize:"15px"}}>Recover Password 
     
     <p style={{fontSize:"15px",color:"black",float:'right'}}> New to myntra!</p> 
         <p style={{color:"pink",fontSize:"15px"}}> Create Account </p>
     </div>
    </Card>   
            </div>
            </Content>
            </div>
        )
    }
}

export default Login
