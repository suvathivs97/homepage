import React, { Component } from 'react';
import Headers from './Headers';
import { Row, Col } from 'antd';

export class Contents extends Component {
    render() {
      
        return (
        <div style={{overflow:"hidden"}}>
            <div><Headers/></div>
                
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active" >
                            <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/26/4642bc72-2114-477a-8f0c-e63bc71433bc1577371587107-2712-Myntra-Banner.jpg" alt="First slide"/>
                            
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/26/4af58aab-63bf-4a69-b3ee-def9ee85cfbd1577384787341-Desktop-Main-Banner.jpg" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/26/def0c705-911c-4212-b4d0-c6f11f301d951577384787374-dk_sports-fest.jpG" alt="Third slide"/>
                            </div>
                        </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                </div>

                         <div className="gutter-example">
                            <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <img  style={{width:'100%',paddingTop:'60px',paddingLeft:'60px'}}
                                    src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/19/68b4baef-8f58-441a-966a-a8d59e7b3e1c1552981078105-deal-strip_Desktop.jpg" srcset=""/>

                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                <img style={{width:'100%',paddingTop:'60px',paddingRight:'60px',marginLeft:"45px"}}
                                 src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/10/8754241d-49d9-423f-8dcd-850eb0d5f5b91575960116836-DK-deal-strip-10-.jpg" srcset=""/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <img style={{width:'100%',paddingTop:'60px',paddingRight:'60px',marginLeft:"30px"}}
                                    src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/9/9/67c9c3c8-edbc-4cf5-8b86-0b9dad0a95461568053332927-deal-strip.jpg"/>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div className="gutter-box">
                                    <img  style={{width:'100%',paddingTop:'60px',paddingRight:'60px',marginLeft:"10px"}}
                                    src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/12/26/e4c85b7f-aa40-4195-abcb-942e734bbba81545795449887-ext-500-deal-strip.jpg"/>
                                </div>
                            </Col>
                            </Row>
                                
                        </div>

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"style={{paddingTop:'30px',paddingRight:'50px'}}>
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" >
                                        <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/12/27/ecded927-f893-4093-a5ff-d2b4a14165e71577420018026-PayZap-desktop-strips.jpG" alt="First slide"/>
                                        
                                        </div>
                                        <div class="carousel-item">
                                        <img class="d-block w-100" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/10/31/fd6ffc62-8bd0-4554-8d2f-7555901cdc421572538641128-paypal-desktop-strips.jpg" alt="Second slide"/>
                            
                                        </div>
                                    </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        
                            </div>
                                      <div>
                                        <img class="image-image undefined " style={{width:'100%',paddingLeft:"70px"}}
                                         src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/27/b1418eba-e250-4665-b37f-b04f81b18fa51553683205515-Brands-section.jpg" 
                                        srcset=""/>
                                        </div>

                                        <div className="gutter-example">
                                        <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingLeft:'60px'}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/26/b31ecd95-8ca8-4b6b-9304-66a2ade286621577359834277-Park-Avenue_AHPMB_BF.jpg" srcset=""/>

                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                            <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"45px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/24/58fef198-d79b-4ac3-85c6-dc0418edbfa11577189051846-Celio_Only---Sons_AHPMB_BF3.jpg" srcset=""/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"30px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/24/9fbe9a3f-e637-4bcf-99ad-78a650dbe4fb1577188824699-Reebok-Dec-2_Onitsuka-Tiger_AHPMB_BF6.jpg"/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"10px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/24/11ea28c8-bb32-4374-bed2-6a934a662bb11577188285317-Nike-Dec-2_Skechers-_AHPMB_AR4.jpg"/>
                                            </div>
                                        </Col>
                                        </Row>
                                    <Row gutter={16}>
                                    <Col className="gutter-row" span={6}>
                                        <div className="gutter-box">
                                            <img  style={{width:'100%',paddingTop:'20px',paddingLeft:'60px'}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/24/ed4fca49-e0f6-436c-83c4-a263844d84b61577176735029-Fossil_Boat_AHPMB_BF1.jpg" srcset=""/>

                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <div className="gutter-box">
                                        <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"45px"}}
                                        src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/24/22449ba2-dc98-47a4-a4b8-3ececc3528b01577187715651-Trolleys-Min-40--Off_AHPMB_BF5.jpg" srcset=""/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <div className="gutter-box">
                                            <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"30px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/17/dba3cf5d-c95b-44d0-a73a-a1e7b08184cd1576562039043-Wildcraft-Dec-19-Acc_Ecko-HL_AHPMB_BF5.jpg"/>
                                        </div>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <div className="gutter-box">
                                            <img  style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"10px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2019/12/13/cb6725fc-5696-4091-a3d6-01323dbc30591576233803381-Skincare-brands_AHPMB_BF2.jpg"/>
                                        </div>
                                    </Col>
                                    </Row>         
                               </div>

                                 <div>
                                  <img   style={{width:'100%',paddingLeft:"70px"}}
                                   src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/27/6d391071-6177-4f2d-a339-fd81ccac2e221553683205570-We-Curate.jpg" srcset=""/>
                                 </div>

                                        <div>
                                                <Row  >
                                                    <Col  span={12} >
                                                    <div >
                                                <img style={{paddingLeft:"60px",width:'100%',marginLeft:"20px"}}
                                                class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/9128eed6-43df-418d-b081-bee1cf10e4481563360396415-We-Curate-you-shop-3june_01.jpg" srcset=""/>
                                                </div>
                                                    </Col>
                            
                                                    
                                                    <Col  span={12}>
                                             <div >
                                                    <img style={{width:'90%'}}
                                                    src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/212acc43-0e47-4131-bedf-aebf387673741563360396403-We-Curate-you-shop-3june_02.jpg"/>
                                            </div>
                                                    </Col>
                                                    </Row>
                                                    <Row >
                                                    <Col  span={12}>
                                                        <div > 
                                                    <img style={{paddingLeft:"60px",width:'100%',marginLeft:"20px"}}
                                                        src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/6392d5d6-d661-472a-aacc-4869408447cd1563360396392-We-Curate-you-shop-3june_03.jpg" srcset=""/>
                                                    </div>
                                                    </Col>
                                                    <Col  span={12}>
                                                        <div >
                                                    <img style={{width:'90%'}}
                                                    src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/3c149d18-1bc6-4aea-8656-119354ef08d01563360396382-We-Curate-you-shop-3june_04.jpg"/>
                                                    </div>
                                                    </Col>
                                                    </Row>         
                                        </div>

                                        <div>
                                        <img   style={{width:'100%',paddingLeft:"70px"}}
                                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/27/d8fbf385-32f6-4b00-870a-8b95b5f5564d1553683205560-Trends.jpg"/>
                                        </div>

                                        <div className="gutter-example">
                                        <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingLeft:'60px'}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/fe43f2f5-8cc2-460b-9a2f-43d498f81d371563360469249-women_01.jpg" srcset=""/>

                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                            <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"45px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/a6783f76-b3fd-4126-baed-c362399937741563360469236-women_02.jpg" srcset=""/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"30px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/ea6cdd64-1daa-45dc-9358-519394429b211563360469224-women_03.jpg"/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"10px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/5b1b150a-e6a7-4152-80c0-a9edc29b1ca11563360469213-women_04.jpg"/>
                                            </div>
                                        </Col>
                                        </Row>
                                        </div>

                                         

                                        <div className="gutter-example">
                                        <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingLeft:'60px'}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/bfca4734-ed0d-4418-a91d-92689ed579e11563360548581-men_01.jpg" srcset=""/>

                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                            <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"45px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/d008fcf2-408c-4951-8828-ea3ffd7b622e1563360548563-men_02.jpg" srcset=""/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"30px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/cd3ba5d8-3b74-4054-98be-7fe3f104e9861563360548542-men_03.jpg"/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"10px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/551821ac-fc9b-4836-af7b-66924934904c1563360548524-men_04.jpg"/>
                                            </div>
                                        </Col>
                                        </Row>
                                        </div>

                                        <div>
                                        <img   style={{width:'100%',paddingLeft:"70px"}}
                                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/27/3aa325f3-a724-4911-af47-68595407934f1553683205524-Discover.jpg"/>
                                        </div>


                                        <div>
                                                <Row  >
                                                    <Col  span={12} >
                                                    <div >
                                                <img style={{paddingLeft:"60px",width:'100%',marginLeft:"20px"}}
                                                 src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/284cde1d-d2df-4f6c-8830-e835acf4a5f81563359444209-Discover-Now_03.jpg" srcset=""/>
                                                </div>
                                                    </Col>
                            
                                                    
                                                    <Col  span={12}>
                                             <div >
                                                    <img style={{width:'90%'}}
                                                    src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/55e76faa-a02a-4da7-8eea-85bda83582d91563359444198-Discover-Now_04.jpg"/>
                                            </div>
                                                    </Col>
                                                    </Row>
                                                    <Row >
                                                    <Col  span={12}>
                                                        <div > 
                                                    <img style={{paddingLeft:"60px",width:'100%',marginLeft:"20px"}}
                                                     src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/eb1aaad9-6db4-4158-8e33-a35ba11481651563359444186-Discover-Now_05.jpg" srcset=""/>
                                                    </div>
                                                    </Col>
                                                    <Col  span={12}>
                                                        <div >
                                                    <img style={{width:'90%'}}
                                                    src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/7/17/fcb52cde-f445-481d-a275-823a7f8f380b1563359444176-Discover-Now_06.jpg"/>
                                                    </div>
                                                    </Col>
                                                    </Row>         
                                        </div>


                                        
                                        <div>
                                        <img   style={{width:'100%',paddingLeft:"70px"}}
                                        src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/27/6c96d800-d9af-4459-81b7-c95e8345a95a1553683205533-Influencer-Section.jpg"/>
                                        </div>

                                        <div className="gutter-example">
                                        <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingLeft:'60px'}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/ccc7324e-982a-452a-9d26-2089fb45674e1553513301205-1.jpg" srcset=""/>

                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                            <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"45px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/b80e73a5-0bdb-42f5-adbc-5cb555a6aaa91553513301190-2.jpg" srcset=""/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"30px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/af742567-4650-4295-acc0-9753c3279f6c1553513301174-3.jpg"/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"10px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/901170b9-59b4-43a6-aefa-2ff803e307321553513301158-4.jpg"/>
                                            </div>
                                        </Col>
                                        </Row>
                                        </div>


                                        <div className="gutter-example">
                                        <Row gutter={16}>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingLeft:'60px'}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/41629664-2756-46f3-9e09-76605597b5491553513286258-1-m.jpg" srcset=""/>

                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                            <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"45px"}}
                                            src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/f95b7985-cb14-451e-9cad-4b51caba26e11553513286239-2-m.jpg" srcset=""/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"30px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/1b5e7a4e-5bac-4529-a39f-487c89f717081553513286218-3-m.jpg"/>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div className="gutter-box">
                                                <img  style={{width:'100%',paddingTop:'20px',paddingRight:'60px',marginLeft:"10px"}}
                                                src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2019/3/25/3b7ee7ac-dbe5-4eff-a595-3058cf7611871553513286197-4-m.jpg"/>
                                            </div>
                                        </Col>
                                        </Row>
                                        </div>











                        
          
        </div>
        
        )
    }
}

export default Contents
