export const get = (url) => {
    return fetch(url, {
        method: 'GET',
        credentials: "include",
        headers: {
            "Accept": "application/json",
        }
    }).then(res => res.json());//把响应体转成json
};

export const post = (url, data) => {
    return fetch(url, {
        method: 'POST',//请求方法
        credentials: "include",
        headers: {//请求头
            "Content-Type": "application/json",
            "Accept": "application/json"//告诉服务器我客户端需要的数据类型
        },
        body: JSON.stringify(data)//请求体
    }).then(res => res.json());
};

export const myDelete = (url, data) => {
    return fetch(url, {
        method: 'DELETE',//请求方法
        credentials: "include",
        headers: {//请求头
            "Content-Type": "application/json",
            "Accept": "application/json"//告诉服务器我客户端需要的数据类型
        },
        body: JSON.stringify(data)//请求体
    }).then(res => res.json());
};