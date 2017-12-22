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

export  function LazyImg(dom){



    function handleAllImg(dom,numTop) {
        let imgs=[...dom.querySelectorAll("img")];
        for (let i = 0; i < imgs.length; i++) {
            let curImg = imgs[i];
            lazyImg(curImg,numTop);

        }
    };


let scrollBox = document.getElementById('scrollBox');
let scrollBoxsHeightcrollTop = 0

    scrollBoxsHeightcrollTop=scrollBox.clientHeight + scrollBox.scrollTop;
    handleAllImg(dom);

    scrollBox.addEventListener('scroll',()=>{
        scrollBoxsHeightcrollTop=scrollBox.clientHeight + scrollBox.scrollTop;
        handleAllImg(dom);
    })


    function lazyImg(oImg) {
        if (oImg.isLoad) return;
        oImg.style.display='block';
        oImg.style.minHeiht='20px';

        let B = oImg.offsetTop;
        let p = oImg.offsetParent;
        while (p){
            B+=p.offsetTop;
            p = p.offsetParent;
        }
        if (B+35<=scrollBoxsHeightcrollTop) {
            oImg.isLoad = true;

            let tempImg = new Image;
            tempImg.src = oImg.getAttribute('data-src');
            tempImg.onload = function () {
                oImg.src = this.src;
                //oImg.style.display="block";
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
        }, 50);
    }


};