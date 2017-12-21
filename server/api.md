[Toc]

## 指定静态文件目录
- static/（静态文件目录）  
- http://localhost:3000/（当前文件夹url）



## 获取图片列表
- api/imglink?file=test1&count=2
- 请求方式：get
- 参数：
  - file（字段、文件名）
  - count（字段：条数，返回全部可以不写）
求
- json文件放置目录在mock/imgLink

成功
```
{
    "code": 0,
    "success": "获取数据成功！",
    "list": [
        {
            "src": "http://localhost:3000/imgLink/test2/1.jpg",
            "link": "#1"
        },
        {
            "src": "http://localhost:3000/imgLink/test2/2.jpg",
            "link": "#2"
        }
    ]
}
```
失败
```
{
    "code": 1,
    "error": "文件路径错误！"
}
```
## 注册
  - /api/reg
- post请求
- 参数：
  - username（用户名字段）
  - password（密码字段）

用户名重复
```
{
    "code": 1,
    "error": "用户名已存在，请重新输入！"
}
```
注册成功
```
{
    "code": 0,
    "success": "注册成功",
    "user": {
        "username": "xuwanlin111"
    }
}
```
## 登录
- /api/login
- post请求
- 参数
  - username（用户名字段）
  - password（密码字段）
  
登录成功
```
{
    "code": 0,
    "success": "登录成功！",
    "user": {
        "username": "xuwanlin111"
    }
}
```
登录失败
```
{
    "code": 1,
    "error": "登录失败，用户名或密码错误！"
}
```
## 退出
- /api/logout
- get请求


退成成功
```
{
    "code": 1,
    "success": "退出成功！"
}
```
## 判断是否登录
- /api/validate
- get请求

未登录
```
{
    "code": 1,
    "error": "此用户未登录！",
}
```
登录
- 没有填写详细信息时，没有orderInfo属性
```
{
    "code": 0,
    "cartCount": 3,//购物车商品种类数量
    "user": {
        "username": "xuwanlin1",
        "orderInfo": {
            "name": "徐万林",
            "address": "昌平区.....",
            "mobile": 555555,
            "email": "39282214@qq.com"
        }
    }
}
```
## 修改个人信息
- /api/user
- post
- 参数
  - password（修改密码）
  - name (收货人)
  - address（地址）
  - mobile（手机号）
  - email（邮箱地址）
 
成功
```
{
    "code": 0,
    "success": "提交成功！"
}
```
## 购物车
- 添加和更新购物车的参数
  - "id": 101, （商品id号）
  - "count": 4,（商品个数）
  - "isSelected": 0（是否被选中，0 未选中，1选中）
- 全选和全不选择的参数
  - allSelect (是否全选，1全选，0全不选，2其他状态)
### 获取购物车数据
- /api/car
- get请求

成功：
```
{
    "code": 0,
    "success": "获取成功！",
    "cart": {
        "list": [
            {
                "id": 103,
                "count": 2,
                "category": 1,
                "title": "娇韵诗Clarins全新基础清洁套装（中性及干性肌肤）",
                "image": "//a3.vimage1.com/upload/merchandise/pdc/611/124/103940765821124611/1/3380810146202-5_218x274_70.jpg",
                "discount": "8.5折",
                "link": "//weixin.vip.com/deeplink/showGoodsDetail?goodsId=352943911&brandId=2027210&tra_from=m%3Ai%3A1509684434365_ff79c50e6af39f0cc18d09df0789fa1a%3Ac%3A%3Adeeplink%3Abrand_2_21&from=m&device=i&cid=1509684434365_ff79c50e6af39f0cc18d09df0789fa1a&f=&other=deeplink&mref=brand_2_21",
                "price": 410,
                "makePrice": 480,
                "size": "均码"
            }
        ],
        "total": 2
    }
}
```
没有商品
```
{
    "code": 2,
    "error": "购物车没发现商品哦！"
}
```
未登录
```
{
    "code": 1,
    "error": "请登录后获取数据！"
}
```
### 添加到购物车
- /api/car
- post请求
- 参数
  - id=134214（商品id号）
  - count=5（更新到几个）

成功
```
{
    "code": 0,
    "success": "添加成功",
    "cart": [
        {
            "id": 134214,
            "count": 3
        }
    ]
}
```
### 删除购物车的一个商品
- /api/car
- delete请求
- 参数
   - id的值是字符串（表示删除一个） 
   - id的值是数组串（表示删除多个） 
- 成功后返回新的购物车数据

删除成功
```
{
    "code": 0,
    "success": "删除成功",
    "cart": [
        {
            "id": 103,
            "count": 2
        }
    ]
}
```
## 获取我的订单
- /api/order
- get请求
- 参数：id（获取一个商品需要传id）

订单列表成功
```
{
    "code": 0,
    "success": "获取成功！",
    "order": {
        "list": [
            {
                "id": 111,
                "date": "2017-12-21 19:21",
                "orderInfo": {
                    "name": "xwl",
                    "address": "北京。。。",
                    "mobile": 15232552,
                    "email": "39282@qq.com"
                },
                "product": [
                    {
                        "id": 101,
                        "count": 1,
                        "category": 1,
                        "title": "娇韵诗Clarins『纤柔美体』套包",
                        "image": "http://localhost:3000/page/1-1.jpg",
                        "discount": "6.5折",
                        "price": 550,
                        "makePrice": 846,
                        "sales": 213,
                        "size": "均码"
                    },
                    ......
                ]
            }
        ]
    }
}
```
一个订单
```
{
    "code": 0,
    "success": "获取成功！",
    "order": {
        "id": 111,
        "date": "2017-12-21 19:21",
        "orderInfo": {
            "name": "xwl",
            "address": "北京。。。",
            "mobile": 15232552,
            "email": "39282@qq.com"
        },
        "product": [
            {
                "id": 101,
                "count": 1,
                "category": 1,
                "title": "娇韵诗Clarins『纤柔美体』套包",
                "image": "http://localhost:3000/page/1-1.jpg",
                "discount": "6.5折",
                "price": 550,
                "makePrice": 846,
                "sales": 213,
                "size": "均码"
            },
            ......
        ]
    }
}
```
空订单
```
{
    "code": 1,
    "error": "暂无全部订单！"
}
```
## 提交订单
- /api/order
- post请求 成功

## 获取专题列表
- /api/category
- get请求
- 参数
  - id=134214（商品id号）
  - count=5（更新到几个）
  

成功： 
```
{
    "code": 0,
    "success": "获取数据成功！",
    "categorys": [
        {
            "category": 1,
            "topic": "专题一",
            "link": "//weixin.vip.com/deeplink/showBrandProducts?brandId=2027210&tra_from=m%3Ai%3A1509684434365_ff79c50e6af39f0cc18d09df0789fa1a%3Ac%3A%3Adeeplink%3Abrand&from=m&device=i&cid=1509684434365_ff79c50e6af39f0cc18d09df0789fa1a&f=&other=deeplink&mref=brand",
            "topicCover": "//a.vimage1.com/upcb/2017/12/11/102/ias_151295616865434_604x290_80.jpg",
            "topicTitle": "娇韵诗CLARINS化妆品专场",
            "activeTime": "剩3时",
            "discount": "购物满指定金额即送相应礼品，数量有限，送完即止"
        }

    ]
}
```
## 获取一个分类下的全部列表
- /api/categorys/:categoryId
- get请求
- :categoryId （具体分类id）
```
{
    "code": 0,
    "success": "获取数据成功！",
    "category": {
        "category": 1,
        "topic": "专题一",
        "link": "//weixin.vip.com/deeplink/showBrandProducts?brandId=2027210&tra_from=m%3Ai%3A1509684434365_ff79c50e6af39f0cc18d09df0789fa1a%3Ac%3A%3Adeeplink%3Abrand&from=m&device=i&cid=1509684434365_ff79c50e6af39f0cc18d09df0789fa1a&f=&other=deeplink&mref=brand",
        "topicCover": "//a.vimage1.com/upcb/2017/12/11/102/ias_151295616865434_604x290_80.jpg",
        "topicTitle": "娇韵诗CLARINS化妆品专场",
        "activeTime": "剩3时",
        "discount": "购物满指定金额即送相应礼品，数量有限，送完即止",
        "list": [
            {
                "id": 101,
                "category": 1,
                "title": "娇韵诗Clarins『纤柔美体』套包",
                "image": "//a2.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-5_218x274_70.jpg",
                "discount": "6.5折",
                "link": "//weixin.vip.com/deeplink/showGoodsDetail?goodsId=352943841&brandId=2027210&tra_from=m%3Ai%3A1509684434365_ff79c50e6af39f0cc18d09df0789fa1a%3Ac%3A%3Adeeplink%3Abrand_2_21&from=m&device=i&cid=1509684434365_ff79c50e6af39f0cc18d09df0789fa1a&f=&other=deeplink&mref=brand_2_21",
                "price": 550,
                "makePrice": 846,
                "slider": [
                    "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-110_384x484_70.jpg"
                ],
                "size": "均码",
                "describe": [
                    "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-110_1.jpg",
                    "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-651.jpg",
                    "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-652.jpg",
                    "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-653.jpg",
                    "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-654.jpg"
                ]
            }
}
```

## 获取所有分类下的全部列表
- /api/categorysAll
- get请求
- 参数
  - keyValue (关键字 配合搜索用，可以没有)
  - offset（从数组索引第几个开始，默认0，）
  - limit（一共显示几条，默认全部）
  - type（排序方式）
    - 0 (price：价格由小到大方式排序)
    - 1 (price：价格由大到小方式排序)
    - 2 (discount：折扣由小到大方式排序)
    - 3 (discount：折扣由大到小方式排序)
    - 4 (sales：销量由小到大方式排序)
    - 5 (sales：销量由大到小方式排序)
    
```
{
    "code": 0,
    "success": "获取数据成功！",
    "data": {
        "list": [
           
            {
                "id": 603,
                "category": 6,
                "title": "薇诺娜Winona  舒缓控油凝露50g  温和控油保湿祛痘",
                "image": "http://a4.vimage1.com/upload/merchandise/pdcvis/2017/11/06/198/c7bbdc8ac0b4468e95d9a120ef3c9426-5_218x274_70.jpg",
                "price": "174",
                "makePrice": "190",
                "discount": "8.8折"
            },
            ......
        ],
        "hasMore": true,
        "total": 3,
        "all": 36
    }
}
```
## 获取一个商品id的内容
- /api/product/:id
- get请求
- :id 是商品id
```
{
    "code": 0,
    "success": "获取数据成功！",
    "product": {
        "id": 101,
        "category": 1,
        "title": "娇韵诗Clarins『纤柔美体』套包",
        "image": "//a2.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-5_218x274_70.jpg",
        "discount": "6.5折",
        "link": "//weixin.vip.com/deeplink/showGoodsDetail?goodsId=352943841&brandId=2027210&tra_from=m%3Ai%3A1509684434365_ff79c50e6af39f0cc18d09df0789fa1a%3Ac%3A%3Adeeplink%3Abrand_2_21&from=m&device=i&cid=1509684434365_ff79c50e6af39f0cc18d09df0789fa1a&f=&other=deeplink&mref=brand_2_21",
        "price": 550,
        "makePrice": 846,
        "slider": [
            "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-110_384x484_70.jpg"
        ],
        "size": "均码",
        "describe": [
            "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-110_1.jpg",
            "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-651.jpg",
            "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-652.jpg",
            "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-653.jpg",
            "//a.vimage1.com/upload/merchandise/pdc/143/267/6268961954267143/0/3380810177169-654.jpg"
        ]
    }
}
```