const express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();

app.use(bodyParser.json()); // 解析json application/json
app.use(bodyParser.urlencoded({extented: true})); // 解析表单 application/x-www-form-urlencoded

app.use(session(
    {
        resave: true,//
        secret: 'zfpx',//秘钥
        saveUninitialized: true//保存为初始化的session
    }));

//跨域
app.use(function (req, res, next) {
    //如果在webpack里配置了代理，那么这些响应头都不要了
    //只允许8080访问
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    //服务允许客户端发的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
    //服务器允许的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
    //允许客户端把cookie发过来
    res.header('Access-Control-Allow-Credentials', 'true');
    //如果请求的方法是OPTIONS,那么意味着客户端只要响应头，直接结束响应即可
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});
//指定静态文件目录
app.use(express.static(path.resolve('./static/')));
//    static/a.txt => http://localhost:3000/a.txt

//获取图片列表
//读取文件./mock/imgLink/test1.json 不写count默认全部
//api/imglink?file=test1&count=2
app.get('/api/imglink/', (req, res) => {
    let body = req.query;
    let file = req.query.file;
    let count = parseInt(req.query.count);
    fs.stat(`./mock/imgLink/${file}.json`, (err, stats) => {
        if (err) {
            return res.json({code: 1, error: '文件路径错误！'})
        }
        let arr = JSON.parse(fs.readFileSync(`./mock/imgLink/${file}.json`, 'utf8'));
        if (arr) {
            if (count > 0) {
                arr = arr.slice(0, count)
            }
            res.json({code: 0, success: '获取数据成功！', list: arr});
        } else {
            res.json({code: 1, error: '获取数据失败'})
        }

    })


});

//注册
app.post('/api/reg', (req, res) => {
    let user = req.body;
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let oldUser = users.find(item => item.username == user.username);
    if (oldUser) {
        res.json({code: 1, error: '用户名已存在，请重新输入！'});
    } else {
        if (!user.username || !user.password) {
            res.json({code: 1, error: '用户名或密码输入格式不正确！'});
            return;
        }
        user.cart=[];
        user.order=[];

        users.push(user);
        fs.writeFile('./mock/users.json', JSON.stringify(users), (err) => {

            if (!err) {
                res.json({code: 0, success: '注册成功!', user: {username: user.username}});
            }


        })
    }
});

//登录
app.post('/api/login', (req, res) => {
    let user = req.body;
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let oldUser = users.find(item => item.username == user.username && item.password == user.password);

    if (oldUser) {
        req.session.user = oldUser;
        res.send({code: 0, success: '登录成功！', user: {username: user.username}});
    } else {
        res.send({code: 1, error: '登录失败，用户名或密码错误！'})
    }
});
//测试登录
app.get('/api/login', (req, res) => {

    req.session.user = {username: "xuwanlin1", password: "1"};
    res.send({code: 0, user: req.session.user.username})
});
//退出
app.get('/api/logout', (req, res) => {
    req.session.user = null;
    res.send({code: 1, success: '退出成功！'})
});
//判断是否登录
app.get('/api/validate', (req, res) => {
    if (req.session.user) {
        let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));

        let oldUser = users.find(item => item.username == req.session.user.username);
        let cartCount=0;
        oldUser.cart.forEach(item=>{
            let count = item.count||0;
            cartCount+=count
        })
        res.send({code: 0, user: {username:req.session.user.username,"cartCount":cartCount,"orderInfo":oldUser.orderInfo}})
    } else {
        res.send({code: 1, error: '此用户未登录！'})
    }
});
//更新 个人数据
app.post('/api/user', (req, res) => {
    if (!req.session.user) {
        return res.send({code: 1, error: '请登录后获取数据！'});
        // return res.redirect('/login');
    }
    let user = req.body;
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let oldUser = users.find(item => item.username == req.session.user.username);

    for (var key in user) {
        if (key == "password") {
            oldUser[key] = user[key];
        } else {
            if (key == "mobile") {
                oldUser["orderInfo"][key] = parseInt(user[key]);
            } else {
                oldUser["orderInfo"][key] = user[key]
            }
        }
    }

    fs.writeFile('./mock/users.json', JSON.stringify(users), (err) => {

        if (!err) {
            res.json({code: 0, success: "提交成功！"});
        }


    })

});


//遍历购物车和订单的列表的id数组，返回有内容的新数组
function getCarOrderInfoList(usre, type, productList) {

    let idArr = usre[type];//[ { id: 12, count: 1 }, { id: 13, count: 2 } ]

    idArr.forEach(item => {

        productList.forEach(category => {
            category.list.forEach(product => {

                if (product.id == item.id) {

                    for (let key in product) {
                        if (key == "describe" || key == "id" || key == "slider") continue;
                        item[key] = product[key];
                    }
                }
            })


        })

    })

};

//获取我的购物车
app.get('/api/car', (req, res) => {
    if (!req.session.user) {
        return res.send({code: 1, error: '请登录后获取数据！'});
        // return res.redirect('/login');
    }
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let productList = JSON.parse(fs.readFileSync('./mock/productList.json', 'utf8'));
    let oldUser = users.find(item => item.username == req.session.user.username);
    // 读取详细信息追加到购物车里
    getCarOrderInfoList(oldUser, 'cart', productList);

    if (oldUser.cart && oldUser.cart.length > 0) {
        res.send({code: 0, success: '获取成功！', cart: {list: oldUser.cart}});
    } else {
        res.send({code: 2, error: '购物车没发现商品哦！'});
    }


});
//获取我的订单
app.get('/api/order', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let productList = JSON.parse(fs.readFileSync('./mock/productList.json', 'utf8'));
    let oldUser = users.find(item => item.username == req.session.user.username);
    // 读取详细信息追加到购物车里
    getCarOrderInfoList(oldUser, 'order', productList);


    if (oldUser.order && oldUser.order.length > 0) {
        res.send({code: 0, success: '获取成功！', order: {list: oldUser.order}});
    } else {
        res.send({code: 1, error: '暂无全部订单！'});
    }

});
//添加到购物车 id=134214 ,count=5表示更新到5，没有count表示+1
app.post('/api/car', (req, res) => {
    if (!req.session.user) {
        return res.send({code: 1, error: '请登录后获取数据！'});
    }
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let oldUser = users.find(item => item.username == req.session.user.username);
    let allSelect = parseInt(req.body.allSelect);
    if (!isNaN(allSelect)) {
        if (allSelect === 0 || allSelect === 1) {
            oldUser.cart.forEach(item => {
                item.isSelected = allSelect;
            })
        }
    } else {
        //数字化
        req.body.id = parseInt(req.body.id);
        let product = oldUser.cart.find(item => item.id == req.body.id);
        if (!product) {
            oldUser.cart.push({id: req.body.id, count: 0, isSelected: 1})
            product = oldUser.cart[oldUser.cart.length - 1];

        }

        product.count = req.body.count ? parseInt(req.body.count) : (++product.count);


        if (!isNaN(parseInt(req.body.isSelected))) {
            product.isSelected = parseInt(req.body.isSelected);
        } else {
            product.isSelected = product.isSelected;
        }
    }

    fs.writeFile('./mock/users.json', JSON.stringify(users), (err) => {
        if (!err) {
            res.json({code: 0, success: '添加成功', cart: oldUser.cart});
        }

    })
});
//删除购物车的一个商品
// app.del('/api/car', (req, res) => {
//     if (!req.session.user) {
//         return res.send({code: 1, error: '请登录后获取数据！'});
//     }
//     ;
//     let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
//     let oldUser = users.find(item => item.username == req.session.user.username);
//
//     //数字化
//     req.body.id = parseInt(req.body.id);
//
//     oldUser.cart = oldUser.cart.filter(item => item.id != req.body.id);
//     fs.writeFile('./mock/users.json', JSON.stringify(users), (err) => {
//         if (!err) {
//             res.json({code: 0, success: '删除成功', cart: oldUser.cart});
//         }
//
//     })
//
// })

//删除购物车商品
app.del('/api/car', (req, res) => {
    if (!req.session.user) {
        return res.send({code: 1, error: '请登录后获取数据！'});
    }
    let users = JSON.parse(fs.readFileSync('./mock/users.json', 'utf8'));
    let oldUser = users.find(item => item.username == req.session.user.username);
    let idArr = [];
    let id;
    if (parseInt(req.body.id)) {
        id = parseInt(req.body.id);
        idArr.push(id);
    } else {
        id = JSON.parse(req.body.id);
        idArr = id;
    }

    idArr.forEach(bodyID => {
        oldUser.cart = oldUser.cart.filter(item => {
            return item.id != bodyID
        })
    })


    fs.writeFile('./mock/users.json', JSON.stringify(users), (err) => {
        if (!err) {
            res.json({code: 0, success: '删除成功', cart: oldUser.cart});
        }

    })
});


// 获取专题列表
app.get('/api/category', (req, res) => {
    let categorys = JSON.parse(fs.readFileSync('./mock/productList.json', 'utf8'));
    if (categorys) {
        categorys = categorys.map(item => {
            delete item.list;
            return item;
        })
    }
    if (categorys) {
        res.send({code: 0, success: '获取数据成功！', categorys});
    } else {
        res.send({code: 1, error: '获取数据失败'})
    }
});
//获取一个分类下的全部列表
app.get('/api/categorys/:categoryId', (req, res) => {
    let id = parseInt(req.params.categoryId);
    let categorys = JSON.parse(fs.readFileSync('./mock/productList.json', 'utf-8'));
    let category = categorys.find(item => item.category == id)
    if (category) {
        res.send({code: 0, success: '获取数据成功！', category});
    } else {
        res.send({code: 1, error: '获取数据失败'})
    }


});
//获取所有分类下的全部列表 发现页
app.get('/api/categorysAll', (req, res) => {

    let list = [];
    let categorys = JSON.parse(fs.readFileSync('./mock/productList.json', 'utf-8'));
    categorys.forEach(category => {
        category.list.forEach(item => {
            newItem = {}
            for (key in item) {
                if (key == "describe" || key == "size") continue;
                newItem[key] = item[key];
            }
            list.push(newItem)
        })

    })

    let {type, offset = 0, limit = 5} = req.query;
    offset = isNaN(offset) ? 0 : parseInt(offset);
    limit = isNaN(limit) ? list.length : parseInt(limit);

    let typeArr = [
        (x, y) => x["price"] - y["price"],
        (x, y) => y["price"] - x["price"],
        (x, y) => {
        //折扣从小到达
            let Xdis=parseInt(x["discount"])?parseInt(x["discount"]):10;
            let Ydis=parseInt(y["discount"])?parseInt(y["discount"]):10;
            return Xdis-Ydis;
        },
        (x, y) => {
            //折扣从大到小
            let Xdis=parseInt(x["discount"])?parseInt(x["discount"]):10;
            let Ydis=parseInt(y["discount"])?parseInt(y["discount"]):10;
            return Ydis -Xdis;
        },//按销量排序
        (x, y) => x["sales"] - y["sales"],
        (x, y) => y["sales"] - x["sales"],
    ]

    let sortList = type ? list.sort(typeArr[parseInt(type)]) : list;

    let data = {}//要返回的内容
    let i = offset;//返回的列表的序号
    data.list = sortList.slice(offset, (offset + limit));


    data.hasMore = (offset + limit) < sortList.length;
    data.total = data.list.length;
    data.all = sortList.length;
    //data.list.forEach(item=>item.number= ++i); //每一个列表元素在列表中的位置


    if (list) {
        res.send({code: 0, success: '获取数据成功！', data});
    } else {
        res.send({code: 1, error: '获取数据失败'})
    }


});
//获取一个商品id的内容
app.get('/api/product/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let product = null;
    let categorys = JSON.parse(fs.readFileSync('./mock/productList.json', 'utf-8'));
    categorys.forEach(category => {
        category.list.forEach(item => {
            if (item.id == id) {
                product = item;
            }
        })

    })
    if (product) {
        res.send({code: 0, success: '获取数据成功！', product});
    } else {
        res.send({code: 1, error: '获取数据失败'})
    }


});


app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});