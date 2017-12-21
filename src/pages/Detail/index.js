import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import "./index.less";
import "../../api/index";
import {get,post} from "../../api";



class Detail extends Component {
    constructor() {
        super();
        this.state = {product:{},cartCount:0};
    }

    componentWillMount() {
        get(`/api/product/${this.props.match.params.id}`).then(res => {
            if (res.code == 0) {
                this.setState({product: res.product});
            }
        });
        this.validate();

    }
    validate=()=>{
        get(`/api/validate`).then(res=>{
            if(res.code==0){
                this.setState({cartCount:res.user.cartCount})
            }
        })

    }
    bandleCart=(id)=>{
        let _this = this;
        post(`/api/car`,{id}).then(res=>{
            console.log(res);
            if (res.code === 1) {
                this.props.history.push('/login');
            }else if(res.code === 0){
                var animatCart = document.querySelector("#animatCartBox .box");
                var  orderNumbers = document.querySelector("#orderNumbers")

                animatCart.classList.add('cur');
                setTimeout(()=>{
                    orderNumbers.classList.add('cur');
                    this.setState({cartCount:this.state.cartCount+=1});
                },300)

                setTimeout(()=>{

                    animatCart.classList.remove('cur');
                    orderNumbers.classList.remove('cur')

                },600)


            }
        })

    }

    render() {
        let {id,category,title,image,discount,price,makePrice,slider,size,describe=[]}= this.state.product;
        return (
            <div className="detail">
                <div className="detail-wrapper">
                    <div className="detail-product">
                        <img
                            src={typeof slider=="object"?slider[0]:slider}
                            alt={title}/>
                        <span className='back'>
                            <i className="iconfont icon-fanhui"  onClick={this.props.history.goBack}></i>
                        </span>
                        <div className="price">
                            <p className="detail-price">
                                <span>¥{price}</span>
                            </p>
                            <p className="detail-makePrice">
                                <span>¥{makePrice}</span>
                            </p>
                            <p className="detail-discount">
                                <span>{discount}</span>
                            </p>
                        </div>

                        <div className="detail-title">
                        <span>
                            {title}
                        </span>
                        </div>

                    </div>
                    <div className="detail-activities">
                        <p>
                            <i className="detail-activityName">满减</i>
                            <span className="detail-activityContent">满200减50，上不封顶</span>
                        </p>
                        <p>
                            <i className="detail-activityName">满减</i>
                            <span className="detail-activityContent">满200减50，上不封顶</span>
                        </p>
                        <p>
                            <i className="detail-activityName">满减</i>
                            <span className="detail-activityContent">满200减50，上不封顶</span>
                        </p>
                        <p>
                            <i className="detail-activityName">满减</i>
                            <span className="detail-activityContent">满200减50，上不封顶</span>
                        </p>
                        <p>
                            <i className="detail-activityName">唯品币</i>
                            <span className="detail-activityContent">购买最多可获得 119个唯品币</span>
                        </p>
                    </div>
                    <div className="detail-productSize">
                        <h3>规格</h3>
                        <p className="size">{size}</p>
                    </div>
                    <div className="detail-promise">
                        <a href="//viva.vip.com/act/m/staic-page-zpbz?wapid=vivac_312">
                            <img src="//b.vimage1.com/2017/08/11/161/1502443448261.png" alt=""/>
                        </a>
                    </div>
                    <div className="detail-productLicense">
                        <h3>品牌授权</h3>
                        <img
                            src="//a3.vimage1.com/upload/brandcool/0/2015/07/27/106/9fe1e93b-0556-480d-ac6a-e437bdde1ffe.jpg"
                            alt=""/>
                    </div>

                    <div className="detail-picture">
                        <h3>商品信息</h3>
                        {
                            describe.map((item,index)=>(
                                <img key={index} src={item} />
                            ))
                        }


                    </div>
                </div>
                <div className="detail-addCart">
                    <Link to="/shop">
                        <i className="iconfont icon-icon1" ></i><span id="orderNumbers" className='order-numbers'>{this.state.cartCount}</span>
                    </Link>
                    <span className="cartContent" onClick={()=>this.bandleCart(id)}>加入购物车</span>
                    <div id="animatCartBox" className="animatCartBox"><img  className="box" src={typeof slider=="object"?slider[0]:slider}/></div>
                </div>


            </div>
        );
    }
}

export default withRouter(Detail);
