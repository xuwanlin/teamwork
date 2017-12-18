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
    "error": "此用户未登录！"
}
```
登录
```
{
    "code": 0,
    "user": "xuwanlin1"
}
```
## 购物车
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
  - count=5（更新到几个，没有这个参数表示加1）

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
成功
```
{
    "code": 0,
    "success": "获取成功！",
    "order": {
        "list": [
            {
                "id": 201,
                "count": 1,
                "category": 2,
                "title": "凝时焕颜亮采套装 彩妆套装",
                "image": "//a3.vimage1.com/upload/merchandise/pdcvis/2017/12/08/147/7505d53424494953847691737e0378e4-5_218x274_70.jpg",
                "discount": "8.7折",
                "link": "//weixin.vip.com/deeplink/showGoodsDetail?goodsId=333907134&brandId=1911825&tra_from=m%3Ai%3A1509684434365_ff79c50e6af39f0cc18d09df0789fa1a%3Ac%3A%3Adeeplink%3Abrand_2_3&from=m&device=i&cid=1509684434365_ff79c50e6af39f0cc18d09df0789fa1a&f=&other=deeplink&mref=brand_2_3",
                "price": 398,
                "makePrice": 459,
                "size": "均码"
            }
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

## 获取专题列表
- /api/category
- get请求

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
```
{
    "code": 0,
    "success": "获取数据成功！",
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
            ]
        }
        ......
    ]
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