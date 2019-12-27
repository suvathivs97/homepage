import React, { Component } from 'react'
import Headers from './Headers'

import{Button} from 'antd';
export class Wishlist extends Component {
    render() {
        return (
            <div>
                <Headers/>
                <div className="innerbox">
                    -prices are inclusive of all taxes-
                </div>
                <div className="wishlist">
                    <b>PLEASE LOG IN</b>
                    <p>login item to view your wishlist</p>
                    <div >
                        <img src="/wishlistlog.png"style={{width:200,padding:'40px'}}/>
                    </div>
                    <div>
                    <Button style={{fontSize:'20px',
                   fontWeight: "600" ,paddingLeft:'70px',paddingBottom:'30px',paddingRight:'70px',alignItems:'center'}}>Login</Button>
                   </div>
                </div>
            </div>
        )
    }
}

export default Wishlist
