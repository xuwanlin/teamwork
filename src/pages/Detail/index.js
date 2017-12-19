import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./index.less";
import "../../api/index";

export default class Detail extends Component {

    componentWillMount(){

    }
    render() {
        return (
            <div className="detail">
                <div className="detail-wrapper">
                    <div className="detail-product">
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/12/08/107/b1b1b2492ab4417b917849dc623178d5-110_384x484_70.jpg"
                            alt=""/>
                        <Link to="/find">
                            <i className="iconfont icon-fanhui"></i>
                        </Link>
                        <div className="price">
                            <p className="detail-price">
                                <span>¥398</span>
                            </p>
                            <p className="detail-makePrice">
                                <span>¥459</span>
                            </p>
                            <p className="detail-discount">
                                <span>8.7折</span>
                            </p>
                        </div>

                        <div className="detail-title">
                        <span>
                            凝时焕颜亮采套装 彩妆套装
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
                        <p className="size">均码</p>
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
                    <div className="detail-productMessage">
                        <h3>商品信息</h3>
                        <div className="point-describe">隔离+修颜霜，多效合一，隔离养肤，富含多重营养精华，修饰面部瑕疵，调理肌肤气色。</div>

                        <div>
                            <dl className="product-attr-item">
                                <dt>品牌名称：</dt>
                                <dd>自然堂</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>商品名称：</dt>
                                <dd>凝时焕颜亮采套装 彩妆套装</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>产地：</dt>
                                <dd>中国</dd>
                            </dl>

                            <dl className="product-attr-item">
                                <dt>有效期：</dt>
                                <dd>2020年</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>规格：</dt>
                                <dd>均码</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>特点描述：</dt>
                                <dd>修纹提亮</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>彩妆功效：</dt>
                                <dd>滋润</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>适用肤质：</dt>
                                <dd>中性肤质 油性皮肤 干性皮肤 混合性皮肤</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>套件数：</dt>
                                <dd>四件套</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>品牌地区：</dt>
                                <dd>中国大陆</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>套装明细品类：</dt>
                                <dd>打底 卸妆</dd>
                            </dl>
                            <dl className="product-attr-item">
                                <dt>套装明细：</dt>
                                <dd>凝时肌活修纹精华霜SPF30 PA++ 35g+雪润皙白多重防晒隔离霜（淡紫色）SPF32PA+++
                                    30ml（新老版本随机发货）+植萃净澈养护卸妆乳30g+植物面膜3片
                                </dd>
                            </dl>
                        </div>

                    </div>
                    <div className="detail-picture">
                        <h3>商品图片</h3>
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/12/08/5/87421898c19747c89ba60588044a3919-110_1.jpg"
                            alt=""/>
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/07/26/36/a0d960f3dfad442dad3992dc37a02c9d-651.jpg"
                            alt=""/>
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/07/26/115/5057bdca5b5e4d04aa41e95eda9408f1-651.jpg"
                            alt=""/>
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/07/26/46/4cc1eb0cfe0a4e8ea7b1eb8f721241a0-651.jpg"
                            alt=""/>
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/11/06/48/713c82a067c64aef9f101717900e8cb8-651.jpg"
                            alt=""/>
                        <img
                            src="//a.vimage1.com/upload/merchandise/pdcvis/2017/07/28/57/0592299553ac42e7913988c14a6ad1b2-110_4.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className="detail-addCart">
                    <Link to="/shop">
                        <i className="iconfont icon-icon1"></i>
                    </Link>
                    <span className="cartContent">加入购物车</span>
                </div>
            </div>
        )
    }
}