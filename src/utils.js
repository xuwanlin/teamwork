// 滑动加载更多
export const upLoadMore = (dom, callback) => {
    let timer;
    dom.addEventListener('scroll', (event) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            let height = dom.clientHeight;
            let scrollHiehgt = dom.scrollHeight;
            let sctollTop = dom.scrollTop;
            if (sctollTop + height + 10 >= scrollHiehgt) {
                callback();
            }
        }, 100);
    });
};
// 下拉刷新
export const downRefresh = (dom, callback) => {
    dom.addEventListener('touchstart', touchStart);
    let startY;//开始触摸的纵坐标
    let distance;//移动的距离
    let initTop = dom.offsetTop;

    function touchStart(event) {
        //只有当此元素的距离顶部的高度等于它的初始距离的话，并且没有滚动的话
        if (dom.offsetTop === initTop && dom.scrollTop === 0) {
            startY = event.targetTouches[0].pageY;//初始值
            dom.addEventListener('touchmove', touchMove);
            dom.addEventListener('touchend', touchEnd);
        }

        function touchMove(event) {
            let pageY = event.touches[0].pageY;
            if (pageY > startY) {//新的点的纵坐标大于起始点的纵坐标表示下拉
                distance = pageY - startY;
                if (distance > 180) return;
                dom.style.top = initTop + distance + 'px';
            } else {//如果上拉的话不处理，移除监听
                dom.removeEventListener('touchmove', touchMove);
                dom.removeEventListener('touchend', touchEnd);
            }
        }

        function touchEnd(event) {
            dom.removeEventListener('touchmove', touchMove);
            dom.removeEventListener('touchend', touchEnd);
            let n = 0;
            let timerId = setInterval(function () {
                //如果说当前的距离已经小于等于初始的值了
                if (dom.offsetTop <= initTop) {
                    dom.style.top = initTop + 'px';
                    clearInterval(timerId);
                } else {
                    n++;
                    if (n > 50) {
                        dom.style.top = dom.offsetTop - 5 + 'px';
                    }

                }
            }, 15);
            if (distance > 50) {
                callback();
            }
        }
    }
};

//图片延迟加载

export  const LazyImg=(dom)=>{
    let imgList=[
        {"src": "http://localhost:3000/imgLink/test1/1.jpg", "link": "1"},
        {"src": "http://localhost:3000/imgLink/test1/2.jpg", "link": "2"},
        {"src": "http://localhost:3000/imgLink/test1/3.jpg", "link": "3"},
        {"src": "http://localhost:3000/imgLink/test1/4.jpg", "link": "4"},
        {"src": "http://localhost:3000/imgLink/test1/5.jpg", "link": "5"}
    ];

    window.onload=window.onscroll=handleAllImg;

    let imgs=dom.getElementsByTagName("img");
    imgList.forEach(address=>{
        imgs=imgs.forEach(item=>{
            item.setAttribute("data-src",address);
        });
    });


    function handleAllImg() {
        for (let i = 0; i < imgs.length; i++) {
            let curImg = imgs[i];
            lazyImg(curImg);
        }
    };

    function lazyImg(oImg) {
        if (oImg.isLoad) return;
        let A = document.body.clientHeight + document.body.scrollTop,
            B = oImg.offsetHeight + oImg.offsetTop;
        if (B <= A) {
            oImg.isLoad = true;
            let tempImg = new Image;
            tempImg.src = oImg.getAttribute('data-src');
            tempImg.onload = function () {
                oImg.src = this.src;
                oImg.style.display="block";
                moveImg(oImg);
            }
        }
    }


    //动画部分
    function moveImg(oImg) {

        let start = 0,
            step = 0.05;
        oImg.style.opacity=start;
        oImg.moveTimer = setInterval(function () {
            if (start >= 1) {
                clearInterval(oImg.moveTimer);
                return;
            }
            start += step;
            oImg.style.opacity=start;
        }, 17);
    }


};